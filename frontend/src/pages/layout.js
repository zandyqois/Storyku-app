import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    

    <>
        
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">
                <img src="https://seeklogo.com/images/F/facebook-marketplace-logo-46A976DABC-seeklogo.com.png" alt="Description" width="30" height="24" style={{marginRight:'10px'}}/>
                    Storyku</span>
        </div>
        </nav>
        <div class="row">
            <div class='col-3'> <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li> <li>
                <Link to="/story">Management Story</Link>
            </li>
            </ul>
      </nav></div>
            <div class='col-9'>
                <Outlet />
            </div>
        </div>
       

      
    </>
  )
};

export default Layout;