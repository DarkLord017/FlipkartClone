import express from 'express';
import Connection from './database/db.js';
import router from './routes/route.js';
import DefaultData from './default.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use('/', router);
const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
DefaultData();

