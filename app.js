const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.post('/bfhl', (req, res) => {
let intdata=[];
// data.push();
let chardata=[];
req.body.data.forEach(function (item) {
    
    if(item==parseInt(item))
    {
        intdata.push(item);
        // console.log(item);
    }
  });
  req.body.data.forEach(function (item) {
    
    if(item!=parseInt(item))
    {
        chardata.push(item);
        // console.log(item);
    }
  });
// console.log(req.body.b);    
res.status(200).json({
    is_success:true,
    userid:"anirudh_gupta_19062001",
    email:"anirudh1587.cse19@chitkara.edu.in",
    roll_number:"1910991587",
    numbers:intdata,
    alphabets:chardata
})

})



app.listen(process.env.PORT || 8000, () => {
    console.log(`listening on ${port}`);
  });
  