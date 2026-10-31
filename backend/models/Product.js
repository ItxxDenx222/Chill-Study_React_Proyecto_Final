import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['Café', 'Bebidas Frías', 'Postres', 'Snacks']
  },
  image: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Crea automáticamente las fechas de creación y actualización
});

const Product = mongoose.model('Product', productSchema);

export default Product;