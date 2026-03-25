import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const navigate = useNavigate();
    
   
    const loginDoUsuario = localStorage.getItem('usuarioLogado');

    const handleLogout = () => {
        localStorage.removeItem('usuarioLogado'); 
        navigate('/login');
    };

  
    if (!loginDoUsuario) {
        return (
            <div>
                <h2>Acesso Negado</h2>
                <button onClick={() => navigate('/login')}>Ir para Login</button>
            </div>
        );
    }

    return (
        <div className="auth-container">
            
            <h1>Bem-vindo(a) à Área Administrativa, {loginDoUsuario}!</h1>
        <p>Usuário: <strong>{loginDoUsuario}</strong></p>
        <button className="logout-btn" onClick={handleLogout}>Sair do Sistema</button>
    </div>
    );
};

export default Admin;