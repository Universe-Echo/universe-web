const express = require('express')
const path = require('path')
  const app = express();

  const port = 3000 || 30001
  
  app.set('view engine', "ejs")

  app.get('/', (req, res) => {
      
    app.use(express.static(path.join(__dirname,'css')));
    // app.use(express.static('public'))
    res.sendFile(path.join(__dirname, 'index.html'));
    });


  
  
  app.get('/docs', (req, res) => {
// const commands = getCommand();



    // res.status(200).render('commands', { commands })
  })

  app.get('/info', (req, res) => {
    res.status(200).send('hello this is me')
  })


  app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
