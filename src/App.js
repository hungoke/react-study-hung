import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home'
import Login from './components/Login'
import PostDetail from './components/PostDetail'

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">go to home</Link>
        <br />
        <Link to="/login">go to Login</Link>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/posts/:id">
            <PostDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
