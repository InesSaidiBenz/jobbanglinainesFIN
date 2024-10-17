import express from 'express'; // Changer require en import
import dotenv from 'dotenv'; 
import offreRoute from './routes/offreEmploi.js';
import mongoose from 'mongoose';


dotenv.config();
const app = express();


// Middleware pour gérer les requêtes en JSON
app.use(express.json())
app.use((req,res,next)=>{
  console.log(req.path, req.method)
  next()
});

// Route de test


app.use('/api/offreEmploi/',offreRoute);

//connexion mongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
// Démarrer le serveur
app.listen(process.env.PORT, () => {
  console.log(`Connecter a mongo db et Backend is running on http://localhost:${process.env.PORT}`);
});
})
.catch((error)=>{
  console.log(error)
});


//app.get()
app.get('/', (req, res) => {
    res.json({mggs: 'Hi nigger.... OHHH!!'}); // Exemple de route
});




