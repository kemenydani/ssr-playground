import React from 'react'
import ReactDOM from 'react-dom'
import Foo from "./Foo";

ReactDOM.hydrate(
    <Foo foo={22}/>,
    document.getElementById('root')
);
