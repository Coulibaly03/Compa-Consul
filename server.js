const express = require('express');
const app = express();
const port = 3000;
const database = require('./config/index').database;

app.set('view engine', 'ejs');


app.get('/', async (req, res) => {

    const consultants = await database.query('SELECT * FROM t_consultant', { type: database.QueryTypes.SELECT});
    // console.log(consultants);
    res.render('pages/index',{consultantList: consultants});
});

app.get('/qui-sommes-nous/:valeurTest', (req, res) => {
    res.send(`On est SEJEN = ${req.params.valeurTest}`);
    });

app.listen(port, async () => {

    console.log(`Example app listening on port ${port}!`);
    // try {
    //     await database.authenticate();
    //     console.log('Connection has been established successfully.');
    //   } catch (error) {
    //     console.error('Unable to connect to the database:', error);
    //   }
    
});