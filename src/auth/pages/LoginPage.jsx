import { useContext } from "react"
import { AuthContext } from "../context"

export const LoginPage = () => {
  const { login } = useContext(AuthContext)

  const onLogin = () => {
    login('Rob Rondon')
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}
