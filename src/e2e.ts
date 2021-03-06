import { join } from 'path';
import express from 'express';
import history from 'express-history-api-fallback';

const app = express();
const root = join(__dirname, '../dist');

app.use(express.static(root));
app.use(history('index.html', { root }));

const server = app.listen(process.env.PORT || 3000);

export default server;
