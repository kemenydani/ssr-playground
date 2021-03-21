import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './src/app';
import bodyParser from 'body-parser';

const server = express();
const PORT = process.env.port || 3005;

server.use(bodyParser.json());
server.use(express.static('build/public'));

server.get('*', (request, response) => {
    const context = {};
    const content = ReactDomServer.renderToString(
        <StaticRouter location={request.url} context={context}>
            <App />
        </StaticRouter>
    );

    const html = `
        <html>
            <head>
            </head>
            <body>
                <div id="root">
                    ${content}
                </div>
                <script src="client.bundle.js"></script>
            </body>
        </html>
    `;

    response.send(html);
});


server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
