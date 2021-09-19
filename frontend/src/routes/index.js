import react from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "../pages/Home"
import Task from "../pages/Task"
import QRCode from "../pages/QRCode"


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/task" exact component={Task} />
        <Route path="/task/:id" exact component={Task} />
        <Route path="/qrcode/" exact component={QRCode} />
      </Switch>
    </BrowserRouter>
  )
}