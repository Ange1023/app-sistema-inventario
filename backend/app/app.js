import express from 'express';
import cors from 'cors';
import { iSessionComp } from '../sub-sistemas/ssDispatcher.js';
import { sedesRouter, productosRouter, loginRouter } from '../src/routes/rDispatcher.js';
import cors_config from '../config/cors_config.json' assert { type: "json" };
import { logoutController } from '../src/controllers/logoutController.js';
const app = express();

app.use(cors(cors_config))
app.use(express.json());
app.use(iSessionComp.getSession());
app.post('/logout', logoutController.logoutController);
app.use('/login', loginRouter);
app.use('/sedes', sedesRouter);
app.use('/productos', productosRouter);




app.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:3000`)
});