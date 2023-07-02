import React, { useContext, useState } from 'react';
import './Login.css';
import { AuthContext } from '../../auth/AuthContext';

const LogoutButton = () => {
    const {logout} = useContext(AuthContext);
    const [msg, setMsg] = useState('');

    const handleLogout = () => {
        logout();
        //setMsg('Logged out');
    }

    return (
        <div>
            {msg.length > 0 && <div className="successMsg">{msg}</div>}
            <button className="logout-button" onClick={handleLogout}>
                Cerrar Sesión
            </button>
        </div>
    )
}

export default LogoutButton