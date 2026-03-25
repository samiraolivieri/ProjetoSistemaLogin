require('dotenv').config();
const express = require('express');
const cors = require('cors');
const AuthController = require('./controller/authController');


const app = express();


app.use(cors());
app.use(express.json());


app.post('/register', AuthController.register);
app.post('/login', AuthController.login);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});