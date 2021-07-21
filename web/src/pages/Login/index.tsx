import React, { useCallback } from 'react';

import { useAuth } from '../../hooks/AuthContext';

const Login: React.FC = () => {
    const { handleLogin } = useAuth();

    const handleSubmit = useCallback(() => {
        handleLogin({
            email: 'Marco',
            password: '123',
        });
    }, [handleLogin]);
    return (
        <>
            <div style={{ backgroundColor: 'green' }}>
                <button type="button" onClick={handleSubmit}>
                    Login
                </button>
            </div>
        </>
    );
};

export default Login;
