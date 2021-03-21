import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import bodyParser from 'body-parser';
import BlogPage from "./src/pages/blog/BlogPage";
import {StaticRouter} from "react-router";

const server = express();
const PORT = process.env.port || 3005;

server.use(bodyParser.json());
server.use(express.static('build/public'));

server.get('/blog', (request, response) => {
    response.send(`
        <div id="root">
            ${ReactDomServer.renderToString(
                <StaticRouter location={request.url} context={{}}>
                    <BlogPage />
                </StaticRouter>
            )}
            <script src="blog.page.bundle.js"></script>
        </div>
    `)
});

server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
