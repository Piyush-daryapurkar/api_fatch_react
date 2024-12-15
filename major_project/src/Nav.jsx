import React from 'react';
import './css/Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
  <>
  <h1></h1>
    <div>
      <nav>
        <div className="main">
          <div className="menu">
            
          <ul><li><Link className='link'  to="/">Home</Link></li></ul>
          <ul><li><Link className='link'  to="/login">login</Link></li></ul>

          <ul><li><Link className='link'  to="/signup">signup</Link></li></ul>

          <ul><li><Link className='link'  to="/admin">admin</Link></li></ul>

          

          </div>

        </div>
      </nav>
    </div>
  </>
  )
}

export default Nav;


// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//     </nav>
//   );
// }
// export default Navbar

