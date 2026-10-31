import express from 'express';
import cors from 'cors';
import conectarDB from './config/database.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

// 1. PRIMERO inicializamos app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Conectar a la base de datos
conectarDB();

// 2. DESPUÉS usamos las rutas
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes); // Ruta de pedidos integrada correctamente

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡El servidor backend de Chill & Study está activo y funcionando! ☕🔥');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});