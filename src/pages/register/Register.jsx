import { Link } from "react-router-dom"
import "./register.scss"

export const Register = () => {
  return (
    <div className='register'>
      <div className='card'>
        <div className='left'>
          <h1>Connect Now.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit expedita deleniti accusamus dolor at. Recusandae culpa deleniti nemo alias? Adipisci eos commodi quas eveniet quaerat numquam provident cupiditate repellendus dolore?</p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className='right'>
          <h1>Register</h1>
          <form>
            <input type='text' placeholder="Username" />
            <input type='email' placeholder="Email" />
            <input type='password' placeholder="Password" />
            <input type='text' placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}
