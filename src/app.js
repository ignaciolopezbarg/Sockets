import express from "express";
import { engine } from 'express-handlebars';
import { Server } from 'socket.io';
import productsRouter from "./routes/products.routes.js";
 import cartsRouter from "./routes/carts.routes.js";
import viewsRouter from "./routes/vistas.routes.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'));


// Motores de Plantilla
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views','./src/views');


app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use('/',viewsRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
