import express from 'express';
import bodyParser from 'body-parser';
//@ts-ignore
import session from 'express-session';
import dbConn from './src/config/database';
import mongoose from 'mongoose';
//import routes
import cat from './src/routes/categoryRoute';
import archive from './src/routes/archiveRoute';


const app = express();
const port = 3000;

//db connection
mongoose.connect(dbConn);
const db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error: '));
db.once('open', ()=> {
  console.log("connected to DB");
})

//body-parser
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Express session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

//set routes
app.use("/categories",cat);
app.use("/archive", archive);

app.get('/', (req:any, res:any) => {
  res.send('Hello Maki :)!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})