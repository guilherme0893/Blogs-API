require('dotenv').config();
const express = require('express');

const app = express();

// ----- ROUTES ------
const userRouter = require('./routes/userRoutes');
// -------------------

app.use('/', express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
