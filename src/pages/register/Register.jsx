import './register.scss'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Abukiks Social.</h1>
          <p>
          Embrace the Social Revolution! Join our vibrant community, where connections flourish, passions thrive, and endless possibilities await. Sign up now to redefine social interaction with us!
          </p>
          <span>Do you have an account?</span>
          <Link to='/login'>
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Username'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input type="text" placeholder='Name'/>
            <button>Register</button>
          </form>
          <div>
            <div>
            <span>Do you have an account?</span>
            <Link to='/login'>
            <span>Login</span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register