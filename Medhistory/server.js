const express = require('express');
const app = express();
const mod1 = require('./mod1');   
app.use('/', mod1);

const PORT = 3001;  
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
