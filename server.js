import express from 'express';
import cors from 'cors';

const port = 4500;
const app = express();

app.use(cors);
app.use(express.json());

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
