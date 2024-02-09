
import OpenAI from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const openai = new OpenAI({apiKey:"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"});
const app=express();
app.use(bodyParser.json());
app.use(cors());
const port =3080;
app.get('/', function (req,res){
    res.send("Hello WOrld");
});
app.post("/", async (req,res)=>{
  console.log("hello2");
  const { message }=req.body;
  console.log(message);
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content:`${message}` }],
    model: "gpt-3.5-turbo",
  });
  console.log(completion.choices[0]);
  res.json({
    data:completion.choices[0].message.content
  })
});
app.listen(port,()=>{
  console.log(`lISTENING AT pORT ${port}`);
});
// import express from 'express';
// import bodyParser from 'body-parser';

// const app = express();
// const port = 3080;
// app.use((_req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', '*');

//   next();
// });
// app.use(bodyParser.json());

// // Handling POST requests at the "/inter" route
// app.post('/inter', (req, res) => {
//   const receivedData = req.body;
//   console.log('Received data:', receivedData);

//   // Process the data and send a response

//   res.json({ success: true, message: 'Data received successfully.' });
// });

// app.listen(port, () => {
//   console.log(`Server is listening on http://localhost:${port}`);
// });