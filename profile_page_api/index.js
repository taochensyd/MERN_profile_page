import express from 'express';
import bodyParser from 'body-parser';
import profileRoutes from './routes/profileDataRoutes.js';

const app = express();

// port 3000 for React, used port 5000 for express
const PORT = 5000;

// will use JSON data in the application
app.use(bodyParser.json());

// users endpoint
app.use('/profile', profileRoutes);

app.get('/', (req, res) => {
    // console.log("GET request");
    res.send("HOME GET request");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

