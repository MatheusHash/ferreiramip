import useAuth from "../hooks/useAuth"

function Dashboard(){
    const {user} = useAuth()
    return <h1>Dashboard: {user?.displayName} </h1>
}
export default Dashboard