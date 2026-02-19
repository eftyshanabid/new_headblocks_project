const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const websiteRoutes = require('./Routes/websiteRoute');
const typeRoutes = require('./Routes/typeRoute');
const projectRoutes = require('./Routes/projectRoute');
const orgRoutes = require('./Routes/organizationRoute');
const dataTableRoutes = require('./Routes/DataTableRoute')


const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API Documentation',
    },
    servers: [
      { url: 'http://localhost:3000' }
    ],
  },
  apis: ['./routes/*.js'], // Path to your route files with JSDoc comments
};
const swaggerSpec = swaggerJsdoc(options);

app.use(express.json());
app.use('/type',typeRoutes);
app.use('/website',websiteRoutes);
app.use('/projects',projectRoutes);
app.use('/org',orgRoutes);
app.use('/dataTable',dataTableRoutes)


app.listen(3000,(()=>{
console.log("app is running on port 3000");
}))