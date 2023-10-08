import users from '../mocks/users';

interface CreateOrUpdateUserRequest {
    name: string; // Define the expected structure of the JSON body
}

function listUsers(request: any, response: any) {
    const { order } = request.query;

    const sortUsers = users.sort((a, b) => {
        if (order === 'desc') {
            return a.id < b.id ? 1 : -1;
        }
        return a.id > b.id ? 1 : -1;
    });

    response.send(200, sortUsers)
}

function getUserById(request: any, response: any) {
    const { id } = request.params;

    const user = users.find((user) => user.id === Number(id));

    if (!user) {
        return response.send(404, { error: 'User not found' })
    }

    response.send(200, user);
}

function createUser(request: any, response: any) {
    const { name } = request.body as CreateOrUpdateUserRequest;

    const user = {
        id: users.length + 1,
        name
    };

    users.push(user);

    response.send(200, user);
}

function updateUser(request: any, response: any) {
    const { id } = request.params;
    const { name } = request.body as CreateOrUpdateUserRequest;

    const userExists = users.find((user) => user.id === Number(id));

    if (!userExists) {
        return response.send(404, { error: 'User not found' })
    }

    users.forEach((user) => {
        if (user.id === Number(id)) {
            user.name = name;
        }
    });

    response.send(200, { id: Number(id), name });
}

function deleteUser(request: any, response: any) {
    const { id } = request.params;

    const userExists = users.find((user) => user.id === Number(id));

    if (!userExists) {
        return response.send(404, { error: 'User not found' })
    }

    const newUsers = users.filter((user) => user.id !== Number(id));

    response.send(200, newUsers);
}

export {
    listUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
