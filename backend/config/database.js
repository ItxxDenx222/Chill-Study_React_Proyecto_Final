import mongoose from 'mongoose';

const conectarDB = async () => {
  try {
    const MONGO_URI = "mongodb+srv://liliana54578_db_user:4LhqdR7x6ANYCLjq@deiby.xnj1htm.mongodb.net/chill_study?retryWrites=true&w=majority";

    await mongoose.connect(MONGO_URI);
    console.log("¡Conectado exitosamente a MongoDB Atlas! 🚀");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1);
  }
};

export default conectarDB;