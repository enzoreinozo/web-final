import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/novedades">Novedades</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

import '../../syles/components/layout/Header.css'


import '../../syles/Nav.css'
import { NavLink } from "react-router-dom";

const Nav = (props) => {

  return(
    <nav>
      <div>
        <ul>
          <li> <NavLink to = "/" className={({  isActive  }) => isActive? "activo" :
          undefined }> Home </NavLink> </li>
          <li> <NavLink to = "nosotros" className={({  isActive  }) => isActive? "activo" :
          undefined }> Nosotros </NavLink> </li>
          <li> <NavLink to = "contacto" className={({  isActive  }) => isActive? "activo" :
          undefined }> Contacto </NavLink> </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;