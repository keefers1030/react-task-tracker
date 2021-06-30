const express = require('express');
const leaders = require('./leaders')
const { getAllLeaders, getLeaderSlug, addNewLeader, getLeaderCategory, getLeaderCommunity, populateLeadersbyGender, getLeaderSlugRender} = require('./controller/leadersController.js')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
});

// app.get('/leaders/render/:slug', getLeaderSlugRender)

app.get('/leaders', getAllLeaders)

app.get('/leaders/:slug', getLeaderSlug)

app.get('/leaders/category/:category', getLeaderCategory)

app.get('/leaders/community/:community', getLeaderCommunity)

app.get("/leaderLikeMe" , function(req, res){
    res.render('leader',{
        getAllLeaders
    })
})

app.post('/leaders', express.json(), addNewLeader)

app.get('/api-doc', (req, res) => {
  res.render('api-doc')
})

app.get('/leader', (req, res) => {
  res.render('leader')
});

// router.get("/main", function(){
//   let pageInfo = {};
//   pageInfo.title = "Demo";
//   pageInfo.populateLeadersbyGender = populateLeadersbyGender;
//   res.render("main", pageInfo);
// })

app.use('/public', express.static(__dirname + "/public"));

app.all('*', (req, res) => {
  return res.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on port 1337...');
});
