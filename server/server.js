const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        // Ajoutez ceci avant le bloc app.listen()
        const recipeRoutes = require('./routes/recipeRoutes');
        app.use('/recipes', recipeRoutes);
    });
}).catch(err => {
    console.error(err);
});