import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res) => res.send('<h1>Server running</h1>'))

app.listen(PORT, () => console.log(`server running: http://localhost:${PORT}`))
