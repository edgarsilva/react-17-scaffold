const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`React 17 Scaffold App listening on PORT: ${PORT}`);
})