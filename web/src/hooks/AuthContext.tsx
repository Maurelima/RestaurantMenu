import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface AuthState {
    token: string;
    user: object;
}

export interface UserData {
    email?: string[];
    cod_usuario?: number[];
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: UserData;
    handleLogin(credentials: SignInCredentials): Promise<void>;
    handleLogout(): void;
    // loading: boolean;
}

const authContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@Cardapio:token');
        const user = localStorage.getItem('@Cardapio:user');
        if (token && user) {
            return { token, user: JSON.parse(user) };
        }

        return {} as AuthState;
    });

    const handleLogin = useCallback(async ({ email, password }) => {
        console.log(email, password);
        try {
            const response = await api.post('/login', {
                email,
                password,
            });
            console.log(response);

            const { token, user } = response.data;

            localStorage.setItem('@Cardapio:token', token);
            localStorage.setItem('@Cardapio:user', JSON.stringify(user));

            setData({ token, user });
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleLogout = useCallback(() => {
        localStorage.removeItem('@Cardapio:token');
        localStorage.removeItem('@Cardapio:user');

        setData({} as AuthState);
    }, []);

    return (
        // value={{ loading, authenticated, handleLogin, handleLogout }}
        <authContext.Provider
            value={{ user: data.user, handleLogin, handleLogout }}
        >
            {children}
        </authContext.Provider>
    );
};

function useAuth(): AuthContextData {
    const context = useContext(authContext);

    if (!context) {
        throw new Error('useAuth deve ser utilizado junto ao authProvider');
    }

    return context;
}

export { AuthProvider, useAuth };
