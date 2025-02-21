const express = require('express');
const app = express();

//파일 내 모듈 가져오기
const userRouter = require('./routes/user');
const channelRouter = require('./routes/channel');

app.use('/', userRouter);
app.use('/channels', channelRouter);

const port = 7777;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
