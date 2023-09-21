import { Link } from 'react-router-dom'
import './login.scss'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Login = () => {

  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login();
  }

  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
          Reconnect and Rediscover! Log in to our vibrant digital community where connections thrive and experiences await. Join the journey today!
          </p>
          <span>Don't you have an account?</span>
          <Link to='/register'>
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Password'/>
            {/* <button onClick={handleLogin}>Login</button> */}
            <button>Login</button>
          </form>
          <div>
            <div>
            <span>Don't you have an account? </span>
            <Link to='/register'>
              <span>Register</span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login