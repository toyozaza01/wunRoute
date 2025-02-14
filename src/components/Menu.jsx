import { Link } from "react-router-dom"
export default function Menu() {
  return(
    <div style={{marginBottom:10}}>
       <Link style={{margin:5}} to='/'>
          <button className="btn btn-outline-primary">Home</button>
       </Link>
       <Link style={{margin:5}} to="/add">
          <button className="btn btn-outline-primary">Add</button>
       </Link>
       <Link style={{margin:5}} to="/edit">
          <button className="btn btn-outline-primary">Edit</button>
       </Link>
    </div>
  )
}
