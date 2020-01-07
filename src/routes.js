import React from "react"
import {Switch,Route} from "react-router-dom"
import Chat from "./Components/Chat/Chat"
import Join from "./Components/Chat/Join"

export default(
    <Switch>
        <Route component={Chat} path="/chat"/>
        <Route component={Join} exact path="/"/>
    </Switch>
)