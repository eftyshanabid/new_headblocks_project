const express = require('express');
const websiteRoutes = require('./Routes/websiteRoute');
const typeRoutes = require('./Routes/typeRoute');
const projectRoutes = require('./Routes/projectRoute');
const orgRoutes = require('./Routes/organizationRoute');


const app = express();

app.use(express.json());
app.use('/type',typeRoutes);
app.use('/website',websiteRoutes);
app.use('/projects',projectRoutes);
app.use('/org',orgRoutes);


app.listen(3000,(()=>{
console.log("app is running on port 3000");
}))