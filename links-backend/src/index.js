const express = require('express');
const cors = require('cors');

const db = require('./models');
const response = require('./middlewares/response');
const checkJWT = require('./middlewares/jwt');

const authController = require('./controllers/auth');
const linkController = require('./controllers/link');

const app = express();

app.use(cors());
app.use(response);
app.use(checkJWT);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authController);
app.use('/link', linkController);

app.get('/',(req, res) => {
  return res.json('API running...');
})

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server running on port 3001');
  });
});

