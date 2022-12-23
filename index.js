const express = require('express')
const app = express()
const port = 3000

const path = require('path');

app.use(express.static('public'))

let data = {};

app.get('/data', (req, res) => {
  let today = new Date();
  let vDate = new Date(today.getFullYear()+1, 0, 1);
  const t = vDate.getTime() - today.getTime()

  let day = Math.floor(t / (1000 * 60 * 60 * 24));
  let hour = Math.floor(((t) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor(((t) % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor(((t) % (1000 * 60)) / (1000));

  data = {
    "day": day,
    "hour": hour,
    "minute": minute,
    "sec": sec,
    "cuurentYear": today.getFullYear() + 1
  }
  return res.send(Object.values(data));
});

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})