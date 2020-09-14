const express = require('express');
const app = express();

// app.get('/', function (req, res) {
//   res.send('Hello Worlddd');
// });
app.get('/', function (req, res) {
  res.send([
    {
      name: 'Muhammad khazaain',
      email: 'miyah.myles@gmail.com',
      position: 'Tecnician Area Kuala Lumpur',
      photo: 'https://i.ibb.co/jyJ1Hdk/pilot1.png',
    },
    {
      name: 'Arif Ariffin',
      email: 'june.cha@gmail.com',
      position: 'Tecnician Area Kuala Lumpur',
      photo: 'https://i.ibb.co/yqMpY2Y/pilot2.png',
    },
    {
      name: 'Muhammad Fad',
      email: 'iida.niskanen@gmail.com',
      position: 'Tecnician Area Kuala Lumpur',
      photo: 'https://i.ibb.co/QF07LBb/pilot-3.png',
    },
    {
      name: 'Ricie neilson',
      email: 'renee.sims@gmail.com',
      position: 'Tecnician Area Kuala Lumpur',
      photo: 'https://i.ibb.co/H4Bt05z/pilot-4.png',
    },
  ]);
});
app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params);
});
//PORT

const port = process.env.PORT || 3400;
app.listen(port, () => console.log('Listening on port ${port}..'));
