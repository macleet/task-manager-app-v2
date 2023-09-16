import express from 'express';
import { join } from 'path';

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'It works!' });
});

if (process.env.NODE_ENV === 'production') {
  console.log(`__dirname = ${__dirname}`);
//   app.use(express.static(join(__dirname, '..', 'dist')));
  app.use(express.static(join(__dirname, '..', 'public')));

  app.listen(3000, () => console.log('listening on port 3000'));
}

export default app;