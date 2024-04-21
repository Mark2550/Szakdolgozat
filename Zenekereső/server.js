import express from 'express';
const app = express();
const port = process.env.PORT || 5173 ;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
