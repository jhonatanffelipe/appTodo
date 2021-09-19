import react from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "../pages/Home"
import Task from "../pages/Task"


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/task" exact component={Task} />
      </Switch>
    </BrowserRouter>
  )
}