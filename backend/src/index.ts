import 'dotenv';
import express from 'express';
import cors from 'cors';

import './database/connection';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
