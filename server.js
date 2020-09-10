const express = require('express');
const app = express();

// app.get('/', function (req, res) {
//   res.send('Hello Worlddd');
// });
app.get('/', function (req, res) {
  res.send([
    {
      title: ' ',
      url: 'https://i.ibb.co/NWMFFgB/UBUNTU.png',
      description: ' ',
      id: 1,
    },
    {
      title: '',
      url: 'https://i.ibb.co/kBqFyv6/13.png',
      description: '',
      id: 2,
    },

    {
      title: ' ',
      url: 'https://i.ibb.co/WxtrC2w/15.png',
      description: '',
      id: 4,
    },

    {
      title: ' ',
      url: 'https://i.ibb.co/B4TgvFN/17.png',
      description: ' ',
      id: 6,
    },
    {
      title: ' ',
      url: 'https://i.ibb.co/1MwSfHr/19.png',
      description: ' ',
      id: 7,
    },
    {
      title: ' ',
      url: 'https://i.ibb.co/q0s0ZRz/dddd.png',
      description: ' ',
      id: 8,
    },
  ]);
});
app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params);
});
//PORT

const port = process.env.PORT || 3400;
app.listen(port, () => console.log('Listening on port ${port}..'));
