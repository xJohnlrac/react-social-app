import './profile.scss'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://i.pinimg.com/564x/95/cc/b6/95ccb635cd03fc61aec7295930467616.jpg" alt="" className="cover" />
        <img src="https://i.pinimg.com/474x/8a/eb/e2/8aebe29132cb9464445a752f2511507b.jpg" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
         <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize='small' />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="small" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="small" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="small" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="small" />
            </a>
          </div>
          <div className="center">
            <span>John Carl</span>
            <div className="info">
              <div className="item">
                <PlaceIcon fontSize='small'/>
                <span>PHIL</span>
              </div>
              <div className="item">
                <LanguageIcon fontSize='small'/>
                <span>abuKiks.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon fontSize='small'/>
            <MoreVertIcon fontSize='small'/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}

export default Profile