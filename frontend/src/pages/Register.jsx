import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
           
            const response = await axios.post('http://localhost:3000/register', { email, senha });

            if (response.status === 201) {
                alert('Usuário cadastrado com sucesso!');
                navigate('/login'); 
            }
        } catch (err) {
            setErro(err.response?.data?.error || 'Erro ao cadastrar usuário');
        }
    };

    return (
        <div className="auth-container">
            <h2>Criar Conta</h2>
            <form onSubmit={handleRegister}>
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
                <button type="submit">Cadastrar</button>
            </form>
            {erro && <p className="error-msg">{erro}</p>}
            <p>Já tem conta? <a href="/login">Faça Login</a></p>
        </div>
    );
};

export default Register;