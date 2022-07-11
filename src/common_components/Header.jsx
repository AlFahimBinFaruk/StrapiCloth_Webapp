import { useState } from "react";
//MDB
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBCollapse,
  MDBIcon,
  MDBBadge,
  MDBBtn,
} from "mdb-react-ui-kit";
//header css
import "../styles/header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//header component
const Header = () => {
  //show nav
  const [showNav, setShowNav] = useState(false);
  //get initial state from auth store
  const { user } = useSelector((state) => state.user);
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer>
        {/* brand name */}
        <Link to="/">
          <MDBNavbarBrand>StrapiCloths</MDBNavbarBrand>
        </Link>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          {/* src input */}
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
            />
            <MDBBtn color="primary">Search</MDBBtn>
          </form>
          <MDBNavbarNav className="navlinks text-muted flex-row justify-content-center justify-content-lg-end">
            <Link to="/shop">
              <p>Shop</p>
            </Link>
            {user ? (
              <>
                <Link to="/account">
                  <p>Account</p>
                </Link>
                <Link to="/cart">
                  <p>
                    {/* shopping-cart-btn */}
                    <div className="shopping-cart-btn">
                      <MDBIcon fas icon="shopping-cart" />
                      <MDBBadge color="danger" notification pill>
                        144
                      </MDBBadge>
                    </div>
                  </p>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <p>Login</p>
                </Link>
                <Link to="/register">
                  <p>Register</p>
                </Link>
              </>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
