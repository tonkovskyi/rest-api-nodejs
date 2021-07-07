const express = require('express');
const postRouter = require('./routes/post.routes');
const swaggerUI = require('swagger-ui-express');
const swagerJsDoc = require('swagger-jsdoc');

const PORT = process.env.PORT || 8080;


const app = express();
app.use(express.json());
app.use('/api', postRouter);

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Rest API NodeJS",
            version: "1.0.0",
            description: "A simple Express Library API",
        },
        servers: [
            {
                url: `http://localhost:${PORT}`
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swagerJsDoc(options)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))

app.listen(PORT, () => console.log(`server started on post ${PORT}`));