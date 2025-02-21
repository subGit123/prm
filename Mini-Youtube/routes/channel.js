const express = require('express');
const router = express.Router();

router.use(express.json()); //미들웨어 설정 (외부 모듈을 사용하기 위함)

let db = new Map();
var id = 0;

// 전체 부분
router
  .route('/')
  // 채널 생성
  .post((req, res) => {
    if (req.body.channelTitle) {
      let channelData = req.body;
      db.set(++id, channelData);

      res
        .status(201)
        .json({message: `${db.get(id).channelTitle}님 채널을 응원합니다`});
    } else {
      res.status(404).json({message: '다시 입력해주세요'});
    }
  })

  // 채널 전체 조회
  .get((req, res) => {
    if (!db.size) {
      return res.status(404).json({
        message: Notmsg(),
      });
    }

    let {userId} = req.body; // 회원 아이디
    let showData = Array.from(db.values());

    // 1) userId가 제공되지 않은 경우
    if (!userId) {
      return res.status(404).json({
        message: '로그인이 필요한 페이지 🥲🥲',
      });
    }

    // 2) userId가 가진 채널이 있는지 확인
    const userChannel = showData.find(channel => channel.userId === userId);

    if (userChannel) {
      res.status(200).json(showData);
    } else {
      res.status(404).json({
        message: `${userId}라는 ${Notmsg}`,
      });
    }
  });

// 개별 부분
router
  .route('/:id')
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
      Notmsg();
    }
  });

//조회되지 않을 경우 메시지 모듈화
const Notmsg = () => {
  res.status(404).json({message: `조회되는 유튜버가 없습니다🥲🥲`});
};

module.exports = router;
