import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
//inorder to activate we need to go to package.jspn and add a line below the main

import postRoutes from './routes/posts.js';

const app = express();


app.use(bodyParser.json({limit: "30mb" , extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb" , extended: true}));
app.use(cors());
app.use('/posts', postRoutes); //will start with posts

const CONNECTION_URL = 'mongodb+srv://buhariesmail:Buhari1234@cluster0.h77lyry.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

/*mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server running on port:${PORT}`)))
.catch((error) => console.log(error.message));*/

mongoose.connect(CONNECTION_URL)
    .then(() => {
        //mongoose.set('useFindAndModify', false);
        app.listen(PORT, () => console.log(`Server running on port:${PORT}`));
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    });
