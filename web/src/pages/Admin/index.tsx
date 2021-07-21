import React from 'react';

import { useAuth } from '../../hooks/AuthContext';

const Admin: React.FC = () => {
    const { handleLogout } = useAuth();
    return (
        <div
            className="container"
            style={{ backgroundColor: 'red', height: '100vh' }}
        >
            <div style={{ backgroundColor: 'green' }}>
                <button type="button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};
export default Admin;
