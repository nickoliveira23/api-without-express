import * as http from 'http';
import { URL } from 'url';

import bodyParser from './helpers/bodyParser';
import routes from './routes';

// Extend the IncomingMessage type to include a query property
declare module 'http' {
    interface IncomingMessage {
        query: { [key: string]: string | string[] };
        params: { [key: string]: string };
    }

    interface ServerResponse {
        send: (statusCode: number, body: any) => void;
    }
}

const server = http.createServer((request, response) => {
    const parsedUrl = new URL(`http://localhost:3000${request.url}`)

    console.log(`Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`)

    let { pathname } = parsedUrl;
    let id = null;
    const splitEndpoint = pathname.split('/').filter(Boolean);

    if (splitEndpoint.length > 1) {
        pathname = `/${splitEndpoint[0]}/:id`;
        id = splitEndpoint[1];
    }

    const route = routes.find((routeObj) => (
        routeObj.endpoint === pathname
        && routeObj.method === request.method
    ));

    if (route && route.handler) {
        request.query = Object.fromEntries(parsedUrl.searchParams) as { [key: string]: string | string[] };
        request.params = { id } as { [key: string]: string };

        response.send = (statusCode: number, body: any) => {
            response.writeHead(statusCode, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(body));
        }

        if (['POST', 'PUT', 'PATCH'].includes(request.method ?? '')) {
            bodyParser(request, () => route.handler(request, response));
        } else {
            route.handler(request, response);
        }
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
    }
});



server.listen(3000, () => console.log('Servidor rodando na porta 3000'));