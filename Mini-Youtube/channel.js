const express = require('express');
const app = express();
const port = 7777;
app.use(express.json()); //미들웨어 설정 (외부 모듈을 사용하기 위함)

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

let db = new Map();
var id = 0;

// 전체 부분
app
  .route('/channels')
  // 채널 생성
  .post((req, res) => {
    if (req.body.channelTitle) {
      db.set(++id, req.body);

      res
        .status(201)
        .json({message: `${db.get(id).channelTitle}님 채널을 응원합니다`});
    } else {
      res.status(404).json({message: '다시 입력해주세요'});
    }
  })

  // 채널 전체 조회
  .get((req, res) => {
    // let channels = {};
    // db.forEach((v, k) => {
    //   channels[k] = v;
    // });
    let showData = Array.from(db.values());
    if (db.size) {
      res.status(200).json(showData);
    } else {
      res.status(400).json({
        message: '조회되는 채널이 없습니다.',
      });
    }
  });

// 개별 부분
app
  .route('/channels/:id')
  // 채널 개별 수정
  .put((req, res) => {
    let {id} = req.params;
    id = Number(id);
    let channelData = db.get(id);
    let oldTitle = channelData.channelTitle;

    if (channelData) {
      let updateTitle = req.body.channelTitle;
      db.set(id, channelData);

      res.status(200).json({
        message: `${oldTitle} 👉 ${updateTitle}님으로 수정되었습니다❗❗`,
      });
    } else {
      res.status(404).json({message: `수정할 수 있는 유튜버가 없습니다🥲🥲`});
    }
  })

  // 채널 개별 삭제
  .delete((req, res) => {
    let {id} = req.params;
    id = Number(id);

    let channelData = db.get(id);
    if (channelData) {
      db.clear();
      res
        .status(200)
        .json({message: `${channelData.channelTitle}님 그동안 감사했습니다`});
    } else {
      res.status(404).json({message: `삭제할 수 있는 유튜버가 없습니다🥲🥲`});
    }
  })

  // 채널 개별 조회
  .get((req, res) => {
    let {id} = req.params;
    id = Number(id);

    let channelData = db.get(id);
    if (channelData) {
      res.status(200).json(channelData);
    } else {
      res.status(404).json({message: `조회되는 유튜버가 없습니다🥲🥲`});
    }
  });
