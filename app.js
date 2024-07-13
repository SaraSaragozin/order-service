const express = require('express');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 3002;

app.use('/orders', orderRoutes);

app.listen(PORT, () => {
    console.log(`Order service listening at http://localhost:${PORT}`);
}); 
  