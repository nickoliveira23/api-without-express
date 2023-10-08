# Documentação da API Node.js sem Express

Este é um projeto de API Node.js sem o uso do framework Express, criado para fins de estudo. O objetivo deste projeto é demonstrar a criação de uma API HTTP básica usando apenas lógica de programação e o módulo HTTP nativo do Node.js.

## Recursos

- **Usuários (Users)**: Este projeto oferece operações CRUD (Create, Read, Update, Delete) para o recurso "Usuários". Você pode realizar as seguintes operações:

### Listar Usuários

- **Endpoint**: `/users`
- **Método**: GET
- **Descrição**: Retorna uma lista de todos os usuários.

### Obter Usuário por ID

- **Endpoint**: `/users/:id`
- **Método**: GET
- **Descrição**: Retorna um usuário com base no ID fornecido na URL.

### Criar Usuário

- **Endpoint**: `/users`
- **Método**: POST
- **Descrição**: Cria um novo usuário com base nos dados fornecidos no corpo da solicitação.

### Atualizar Usuário

- **Endpoint**: `/users/:id`
- **Método**: PUT
- **Descrição**: Atualiza um usuário existente com base no ID fornecido na URL e nos dados fornecidos no corpo da solicitação.

### Excluir Usuário

- **Endpoint**: `/users/:id`
- **Método**: DELETE
- **Descrição**: Exclui um usuário com base no ID fornecido na URL.

**Lembre-se de que os dados neste projeto são mockados e não são persistentes.** Eles são usados apenas para fins de demonstração e estudo.

Este projeto foi desenvolvido como uma introdução à criação de uma API em Node.js sem o uso do Express. Sinta-se à vontade para usá-lo como um ponto de partida para seus próprios projetos ou para aprender mais sobre o funcionamento interno das APIs Node.js.

**Observação**: Certifique-se de que o servidor esteja em execução antes de fazer solicitações para a API. Consulte o código-fonte para obter detalhes sobre como iniciar o servidor.
