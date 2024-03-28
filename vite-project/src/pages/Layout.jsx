import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">MainPage</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link to="/SignIn">SignIn</Link>
          </li>
        </ul>
      </nav>
      
      <Outlet />
      {/** Outlet renders the current route selected */}
    </>
  )
};

export default Layout;
