const express = require('express');
const app = express();
const port = 5555;
const {faker} = require('@faker-js/faker');

app.listen(port, () => {
  console.log(`서버 실행 중 ${port}`);
});

app.get('/', (req, res) => {
  res.json({
    message: '안녕하세용',
  });
});

app.get('/faker/users/:id', (req, res) => {
  const {id} = req.params;

  const users = [];

  for (let i = 1; i <= id; i++) {
    users.push({
      email: faker.internet.email(),
      password: faker.internet.password(),
      fullName: faker.person.fullName(),
      contact: faker.phone.number(),
    });
  }
  res.status(200).json(users);
});
