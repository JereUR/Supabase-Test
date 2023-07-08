import { client } from '../services/client'

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data, error } = await client.auth.signInWithOtp({
      email: e.target.email.value
    })

    if (!error) {
      console.log(data)
    } else {
      console.error(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter your email" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Login
