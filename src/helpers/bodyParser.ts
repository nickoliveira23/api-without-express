function bodyParser(request: any, callback: any) {
    let body = '';

    request.on('data', (chunk: any) => {
        body += chunk;
    });

    request.on('end', () => {
        body = JSON.parse(body);
        request.body = body;
        callback();
    })
}

export default bodyParser;