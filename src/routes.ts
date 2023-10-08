import {
    listUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from './controllers/UserController';

const userRoutes = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: listUsers
    },
    {
        endpoint: '/users/:id',
        method: 'GET',
        handler: getUserById
    },
    {
        endpoint: '/users',
        method: 'POST',
        handler: createUser
    },
    {
        endpoint: '/users/:id',
        method: 'PUT',
        handler: updateUser
    },
    {
        endpoint: '/users/:id',
        method: 'DELETE',
        handler: deleteUser
    },
]

export default userRoutes;

