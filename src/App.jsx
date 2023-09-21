import './styles/global.scss'
import './styles/theme.scss'
// import Login from './pages/login/Login'
// import Register from './pages/register/Register'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import NavBar from './components/navBar/NavBar'
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'
import { AuthContext } from './context/authContext'

const App = () => {

  const {currentUser} = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext)


  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <div className="main">
        <NavBar/>
        <div style={{display:'flex'}}>
          <LeftBar/>
          <div style={{flex: 7}}>
          <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
      </div>
    )
  };

  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to='/login'/>
    } 

    return children
  } 

  const router = createBrowserRouter([
    {
      path: '/',
      element: 
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/profile/:id',
          element: <Profile/>
        },
      ]
    },
    // {
    //   path: '/login',
    //   element: <Login/>
    // },
    // {
    //   path: '/register',
    //   element: <Register/>
    // },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App