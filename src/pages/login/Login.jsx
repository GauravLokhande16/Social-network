import { Link } from 'react-router-dom'
import './login.scss'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'


export const Login = () => {
  const {login} = useContext(AuthContext)

  const handleLogin = () => {
    login()
  }

  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>Hello People.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit expedita deleniti accusamus dolor at. Recusandae culpa deleniti nemo alias? Adipisci eos commodi quas eveniet quaerat numquam provident cupiditate repellendus dolore?</p>
          <span>Don't you have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form>
            <input type='text' placeholder="Username" />
            <input type='password' placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
