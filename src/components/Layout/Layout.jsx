// Navbar.jsx

import React from 'react';
import './Layout.css';
import { Link, Outlet} from 'react-router-dom';
export default function Layout() {
  return (
    <div>
    <nav>
          <ul>
            <li>
              <Link to="/">Posts</Link>
            </li>
            <li>
              <Link to="/AlbumsPage">Albums</Link>
            </li>
          </ul>
    </nav>
    <Outlet />
    </div>
    
  );
}
