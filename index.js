require('dotenv').config();
const express = require('express');

const app = express();

// ----- ROUTES ------
const userRouter = require('./routes/userRoutes');
const loginRouter = require('./routes/loginRoutes');
// -------------------

app.use('/', express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);

app.use('/login', loginRouter);

// middleware de erro ---> ver declaração e como realizar o throw error!
// boa prática -- atenção
// app.use(err, req, res, next) => {
// }

app.listen(3000, () => console.log('ouvindo porta 3000!'));
