const express = require("express");
const routes = require("./routes/routers");
const authrouters = require("./routes/authrouters");
const connectDB = require("./db/connect");
const jwtVerify = require('./jwt/tokenVerify')
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json())
app.use("/api", routes);
app.use("/api/auth",jwtVerify,authrouters)

const start = async () => {
  try {
    await connectDB("mongodb://127.0.0.1:27017/ytdataservernew");
    app.listen(80, () => {
      console.log("server listning on 80");
    });
  } catch (error) {
    console.log(error)
    console.log('server unable to connect, port issue of db issue')
  }
};
start()
// const authenticateJWT = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (authHeader) {
//         const token = authHeader.split(' ')[1];

//         jwt.verify(token, accessTokenSecret, (err, user) => {
//             if (err) {
//                 return res.sendStatus(403);
//             }

//             req.user = user;
//             next();
//         });
//     } else {
//         res.sendStatus(401);
//     }
// };
