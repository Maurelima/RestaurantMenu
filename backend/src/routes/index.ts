import { Router } from 'express';
import AuthenticateUserService from '../modules/users/AuthenticateUserService';

const routes = Router();

routes.get('/', async (request, response) => {
    return response.json({ message: 'ok' });
});

routes.post('/login', async (request, response) => {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
        email,
        password,
    });

    delete user.password;

    return response.json({ user, token });
});

export default routes;
