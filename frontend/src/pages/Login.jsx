import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', { email, senha });

            if (response.status === 200) {
                const dadosDoUsuario = response.data.user.login; 
                localStorage.setItem('usuarioLogado', dadosDoUsuario);
                navigate('/admin'); 
            }
        } catch (err) {
            setErro(err.response?.data?.error || 'E-mail ou senha incorretos');
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    onChange={e => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Senha" 
                    onChange={e => setSenha(e.target.value)} 
                    required 
                />
                <button type="submit">Entrar</button>
            </form>
            {erro && <p className="error-msg">{erro}</p>}
            <p>Não tem conta? <a href="/register">Cadastre-se</a></p>
        </div>
    );
};

export default Login;