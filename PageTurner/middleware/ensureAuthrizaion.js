const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

export default function ensureAuthrizaion(req, res) {
  let receivedJWT = req.headers['authorization'];
  let decodedJWT = jwt.verify(receivedJWT, `${process.env.PRIVATE_KEY}`);

  return decodedJWT;
}
