// https://www.npmjs.com/package/inshorts-news-api

const express = require('express');
const app = express();
const { log } = console;
const inshorts = require('inshorts-news-api');
const path = require('path');

//* MIDDLEWARE
// app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var options = {
    lang: 'en',
    category: ''
  }
  
  //for next 25 news posts
//   var options = {
//     lang: 'en',
//     category: '',
//     news_offset:'87w7oet4-1'
//   }
  
//   inshorts.getMoreNews(options ,function(result, news_offset){
//     console.log(result);
//     console.log(news_offset);
//   });

app.get('/', async (req, res) => {
    const obj = {};
    await inshorts.getNews(options, function(result, news_offset){
        obj.results = result;
        obj.offset = news_offset;
    });
    res.render('index', { results } = obj);
});


app.listen(4000, () => {
    log("serving on port 4000");
})