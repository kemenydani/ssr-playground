import React from 'react';
import {Route, Switch} from "react-router";

export default function () {
    return (
        <Switch>
            <Route path="/" render={() => (
                <div>
                    <h1>blog page</h1>
                    <button onClick={() => {
                        console.log(window.innerHeight)
                    }}>
                        button
                    </button>
                </div>
            )}/>
        </Switch>
    )
}
