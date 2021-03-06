// import firebase from "../firebase"
import { useState } from "react"
import { useRouter } from "next/router"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const registerHandler = () => {
    //
  }

  const loginHandler = () => {
    //
  }

  const loginRegisterForm = (buttonName) => (
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="email">eMail</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="form-control"
        />
        <small>We will never share your eMail</small>
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="form-control"
        />
      </div>

      <div>
        <button onClick={registerHandler} className="btn btn-primary">
          {buttonName}
        </button>
      </div>
    </div>
  )

  return (
    <div className="container">
      <h2 className="text-center pt-3 display-4">Login / Register</h2>

      <div className="row">
        {loginRegisterForm("Login")} {loginRegisterForm("Register")}
      </div>
    </div>
  )
}

export default Login
