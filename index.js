const express = require('express');
const websiteRoutes = require('./Routes/websiteRoute');
const typeRoutes = require('./Routes/typeRoute')

const app = express();

app.use(express.json());
app.use('/type',typeRoutes)
app.use('/website',websiteRoutes)

app.listen(3000,(()=>{
console.log("app is running on port 3000");
}))