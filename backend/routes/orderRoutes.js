import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

// Ruta POST para recibir y guardar el pedido en MongoDB
router.post('/', async (req, res) => {
  try {
    console.log('📥 ¡Petición POST recibida en /api/orders!', req.body);

    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();

    console.log('✅ ¡Pedido guardado exitosamente en MongoDB con ID:', savedOrder._id);
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('❌ Error al guardar el pedido en el servidor:', error.message);
    res.status(500).json({ message: 'Error al guardar el pedido', error: error.message });
  }
});

export default router;