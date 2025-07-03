import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <Link to= "/" className=''> All </Link>
        <Link to= "/?todos=Active" className=''> Aactive </Link>
        <Link to= "/?todos=Complated" className=''> Completed </Link>
    </nav>
  )
}

export default Navbar;
