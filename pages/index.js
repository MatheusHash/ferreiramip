import useAuth from "../hooks/useAuth"

export default function Home() {
  const { user, signin } = useAuth()
  console.log('user', user)

  return (
    <div>
      <h1>OLÁ ferreiramip</h1>
      <button onClick={()=> signin() }>Logar com GitHub</button>
    </div>
  )
}
