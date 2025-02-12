const express = require('express');
const app = express(); //서버를 담아둠

app.listen(3000, () => {
  console.log('server start...');
});

let db = new Map();
db.set(1, 'NoteBook');
db.set(2, 'Cup');
db.set(3, 'Table');

console.log(db); //{ 1 => 'NoteBook', 2 => 'Cup', 3 => 'Table' }

console.log(db.get(1)); //NoteBook

app.get('/:user_req', (req, res) => {
  const {user_req} = req.params;
  const Num_user_req = parseInt(user_req);

  if (db.get(Num_user_req) == undefined) {
    res.json({
      message: '없는 상품입니다.',
    });
  } else {
    res.json({
      id: Num_user_req,
      product: db.get(Num_user_req),
    });
  }
});
