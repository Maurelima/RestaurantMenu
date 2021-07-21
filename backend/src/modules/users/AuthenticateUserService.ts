import { sign } from 'jsonwebtoken';

import authConfig from '../../config/auth';

import AppError from '../../shared/error/AppError';

interface Request {
    email: string;
    password: string;
}

interface Response {
    user: any;
    token: string;
}

class AutheticateUserService {
    public async execute({ email, password }: Request): Promise<Response> {
        // const usersRepository = getRepository(User);
        // const user = await usersRepository.findOne({
        //     where: { des_usuario },
        // });
        // if (!user) {
        //     throw new AppError('Usuário ou Senha inválidos', 401);
        // }

        // const passwordMatched = await compare(senha, user.senha);

        // if (!passwordMatched) {
        //     throw new Error('Usuário ou Senha inválidos');
        // }

        const user = {
            cod_usuario: 1,
            password: '123',
            des_usuario: 'Marco',
            email: 'Marco',
        };

        if (email !== user.email) {
            throw new Error('Usuário ou Senha inválidos');
        }

        if (password !== user.password) {
            throw new AppError('Usuário ou Senha inválidos', 401);
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({ username: user.des_usuario }, secret, {
            subject: `${user.cod_usuario}`,
            expiresIn,
        });

        return {
            user,
            token,
        };
    }
}

export default AutheticateUserService;
