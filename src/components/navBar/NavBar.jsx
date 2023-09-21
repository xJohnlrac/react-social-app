import './navBar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

const NavBar = () => {

  const {toggle, darkMode} = useContext(DarkModeContext)
  const {currentUser} = useContext(AuthContext)


  return (
    <div className='navBar'>
      <div className="left">
        <Link to='/' style={{textDecoration:'none'}}>
          <span>abuKiks</span>
        </Link>
          <HomeOutlinedIcon style={{fontSize:'20px'}}/>
          {darkMode ? <WbSunnyOutlinedIcon style={{fontSize:'20px'}} onClick={toggle}/> : <DarkModeOutlinedIcon style={{fontSize:'20px'}} onClick={toggle}/>}
          <GridViewOutlinedIcon style={{fontSize:'20px'}}/>
          <div className="search">
            <SearchOutlinedIcon style={{fontSize:'20px'}}/>
            <input type="text" placeholder='Search' />
          </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon style={{fontSize:'20px'}}/>
        <EmailOutlinedIcon style={{fontSize:'20px'}}/>
        <NotificationsOutlinedIcon style={{fontSize:'20px'}}/>
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar