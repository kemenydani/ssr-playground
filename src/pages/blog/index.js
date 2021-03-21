import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import BlogPage from "./BlogPage";

ReactDOM.hydrate(
    <BrowserRouter>
        <BlogPage />
    </BrowserRouter>,
    document.getElementById('root')
);
