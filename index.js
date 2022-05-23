const express = require('express')
const path = require('path')
const app = express();
const mongoose = require('mongoose')
const port = 3000 || 30001
const chalk = require('chalk')
const Schema = require('./models/web');
const Schema2 = require('./models/onstatus');


mongoose.connect('');
	mongoose.connection.on("connected", () =>
		console.log(
			chalk.cyan("[ INFORMATION ]") +
			chalk.white.bold(" | ") +
			chalk.blue(`${new Date().toLocaleDateString()}`) +
			chalk.white.bold(" | ") +
			chalk.cyan("Mongo DB Connection") +
			chalk.white(": ") +
			chalk.greenBright(`Connected`)
		)
	);

  Schema.findById('6275595f155457c1c0997771', (err, data) => {
    // if (!data) return  app.get('/info', (req, res) => {
    //   res.status(200).send('No data found')
    // })
    
    // console.log(data.Users)
    // console.log(data.Guilds)
    
    const status = {
      guilds: data.Guilds,
      users: data.Users,
      channels: data.Channels
    }
    const {guilds, users, channels} = status;

    Schema2.findById('62760710764a55dc108fa4a1', (err, data) => {
      const onstatus1 = {
        statuson: data.Status
      }
        
      const {statuson} = onstatus1;
     
      console.log(data.Status)
    
    

  // console.log('update!')
  app.get('/status', (req, res) => {
    
    res.status(200).render('status', { status, onstatus1})
    
  })
})
})


app.set('view engine', 'ejs')

// app.use((req, res, next) => {
//   res.status(404).send(
//       "<h1>Oops you are at the wrong page</h1>")
// })
  app.get('/', (req, res) => {
      
    app.use(express.static(path.join(__dirname,'css')));
    app.use(express.static('public'))
    res.sendFile(path.join(__dirname, 'index.html'));
    });


    app.get('/home', (req, res) => {
      
      app.use(express.static(path.join(__dirname,'css')));
      app.use(express.static('public'))
      res.sendFile(path.join(__dirname, 'index.html'));
      });
  
    app.get('/pug', (req, res) => {
      res.render('index', { title: 'Hey', message: 'Hello there!' })
    })
  
  app.get('/docs', (req, res) => {
// const commands = getCommand();



    // res.status(200).render('commands', { commands })
  })

 

  app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });


