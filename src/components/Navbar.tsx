// import { Link } from "react-router-dom";
// import './Navbar.css'

// const Navbar = () => {
//   return (
//     <nav>
//         <Link to= "/?todos=all" className=''> All </Link>
//         <Link to= "/?todos=active" className=''> Active </Link>
//         <Link to= "/?todos=completed" className=''> Completed </Link>
//     </nav>
//   )
// }

// export default Navbar;


import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-evenly gap-3 py-3 bg-success rounded">
      <Link to="/?todos=all" className="text-white text-decoration-none fw-semibold">
        All
      </Link>
      <Link to="/?todos=active" className="text-white text-decoration-none fw-semibold">
        Active
      </Link>
      <Link to="/?todos=completed" className="text-white text-decoration-none fw-semibold">
        Completed
      </Link>
    </nav>
  );
};

export default Navbar;
