import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route element={<PrivateRoute></PrivateRoute>}>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
