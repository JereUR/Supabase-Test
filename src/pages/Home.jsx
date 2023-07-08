import { client } from '../services/client'

export const Home = () => {
  const seeUser = async () => {
    const {
      data: { user }
    } = await client.auth.getUser()

    console.log(user)
  }

  return (
    <div>
      Home <button onClick={() => client.auth.signOut()}>Logout</button>{' '}
      <button onClick={seeUser}>See USer</button>
    </div>
  )
}
