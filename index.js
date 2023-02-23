const express = require('express');
const app = express();
const { log } = console;
const inshorts = require('inshorts-news-api');

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
    inshorts.getNews(options, await function(result, news_offset){
        obj.result = result;
        obj.offset = news_offset;
        res.send(obj);
    });
    
});


app.listen(4000, () => {
    log("serving on port 4000");
})