import express from 'express';
import cors from 'cors';
import { sedesRouter, productosRoute, loginRoute } from '../src/routes/rDispatcher.js';

const app = express();

app.use(cors())
app.use(express.json());





app.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:3000`)
});