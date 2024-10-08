const path = require('path');

const rootDir = require('./util/path');

const bodyParser = require('body-parser');

const express = require('express');

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views')

const adminData = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);

app.use(shopRoutes);

app.use((req, res, next)=>{
    res.sendFile(path.join(rootDir,'views','404.html'));
});

app.listen(8082);