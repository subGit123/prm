const express = require('express');
const app = express(); //서버를 담아둠

app.listen(3000, () => {
  console.log('server start...');
});

let db = new Map();

let notebook = {
  productName: 'notebook',
  price: 200000,
};

let cup = {
  productName: 'cup',
  price: 3000,
};

let table = {
  productName: 'table',
  price: 100000,
};

db.set(1, notebook);
db.set(2, cup);
db.set(3, table);

console.log(db);
// //Map(3) {
//   1 => { productName: 'notebook', price: 200000 },
//   2 => { productName: 'cup', price: 3000 },
//   3 => { productName: 'table', price: 100000 }
// }

console.log(db.get(1));
console.log(db.get(2));
console.log(db.get(3));

// app.get('/:user_req', (req, res) => {
//   const {user_req} = req.params;
//   const Num_user_req = parseInt(user_req);

//   if (db.get(Num_user_req) == undefined) {
//     res.json({
//       message: '없는 상품입니다.',
//     });
//   } else {
//     res.json({
//       id: Num_user_req,
//       product: db.get(Num_user_req),
//     });
//   }
// });

app.get('/:id', (req, res) => {
  let {id} = req.params;
  id = Number(id);
  console.log('db 확인하기', db.get(id));

  if (db.get(id) == undefined) {
    res.json({
      message: '없는 상품입니다.',
    });
  } else {
    product = db.get(id);

    // 객체 값 하나더 추가하는 방법
    // 1. product.id = id;
    // 2.
    product['id'] = id;

    res.json(product);
  }
});
