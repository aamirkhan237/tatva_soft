import React, { useMemo, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { headerStyle } from "./style";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import ListItem from "@material-ui/core/ListItem";
import siteLogo from "../../assets/images/site-logo.svg";
import crossIcon from "../../assets/images/cross.svg";
import cartIcon from "../../assets/images/cart.png";
import flagIcon from "../../assets/images/flag.png";
import searchIcon from "../../assets/images/search.png";
import { materialCommonStyles } from "../../utils/materialCommonStyles";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@material-ui/core";
import Shared from "../../utils/shared";
import { AuthContextModel, useAuthContext } from "../../context/auth";
import { RoutePaths } from "../../utils/enum";

const Header: React.FC = () => {
  const classes = headerStyle();
  const authContext: AuthContextModel = useAuthContext();
  const materialClasses = materialCommonStyles();
  const [open, setOpen] = useState<boolean>(false);

  // for mobile menu
  const openMenu = (): void => {
    document.body.classList.toggle("open-menu");
  };

  const items = useMemo(() => {
    console.log("check");
    return Shared.NavigationItems.filter(
      (item) =>
        !item.access.length || item.access.includes(authContext.user.roleId)
    );
  }, [authContext.user]);

  const logOut = () => {
    authContext.signOut();
  };

  return (
    <div className={classes.headerWrapper}>
      <AppBar className="site-header" id="header" position="static">
        <div
          className="top-header"
          style={{ display: open ? "none" : "block" }}
        ></div>
        <div className="bottom-header">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo-wrapper">
                <Link to="/" className="site-logo" title="logo">
                  <img src={siteLogo} alt="logo" />
                </Link>
              </div>
              <div className="nav-wrapper">
                <div className="top-right-bar">
                  <List className="top-nav-bar">
                    {!authContext.user.id && (
                      <>
                        <ListItem>
                          <Link to={RoutePaths.Login} title="Login">
                            Login
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link to={RoutePaths.Register} title="Register">
                            Register
                          </Link>
                        </ListItem>
                      </>
                    )}
                    {items.map((item, index: number) => (
                      <ListItem key={index}>
                        <Link to={item.route} title={item.name}>
                          {item.name}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                  <List className="cart-country-wrap">
                    <ListItem className="cart-link">
                      <Link to="/cart" title="Cart">
                        <img src={cartIcon} alt="cart.png" />
                        <span>0</span>
                        Cart
                      </Link>
                    </ListItem>
                    <ListItem className="hamburger" onClick={openMenu}>
                      <span></span>
                    </ListItem>
                  </List>

                  {authContext.user.id && (
                    <List className="right">
                      <Button onClick={() => logOut()} variant="outlined">
                        Log out
                      </Button>
                    </List>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-search-wrapper">
          <div className="container">
            <div className="header-search-outer">
              <div className="header-search-inner">
                <div className="text-wrapper">
                  <TextField
                    id="text"
                    name="text"
                    placeholder="What are you looking for..."
                    variant="outlined"
                  />
                  <div className="product-listing">
                    <p className="no-product">No product found</p>
                    <p className="loading">Loading....</p>
                    <List className="related-product-list">
                      <ListItem>
                        <div className="inner-block">
                          <div className="left-col">
                            <span className="title">Title 1</span>
                            <p>Description</p>
                          </div>
                          <div className="right-col">
                            <span className="price">1000</span>
                            <Link to="/">Add to cart</Link>
                          </div>
                        </div>
                      </ListItem>
                      <ListItem>
                        <div className="inner-block">
                          <div className="left-col">
                            <span className="title">Title 1</span>
                            <p>Description</p>
                          </div>
                          <div className="right-col">
                            <span className="price">1000</span>
                            <Link to="/">Add to cart</Link>
                          </div>
                        </div>
                      </ListItem>
                      <ListItem>
                        <div className="inner-block">
                          <div className="left-col">
                            <span className="title">Title 1</span>
                            <p>Description</p>
                          </div>
                          <div className="right-col">
                            <span className="price">1000</span>
                            <Link to="/">Add to cart</Link>
                          </div>
                        </div>
                      </ListItem>
                      <ListItem>
                        <div className="inner-block">
                          <div className="left-col">
                            <span className="title">Title 1</span>
                            <p>Description</p>
                          </div>
                          <div className="right-col">
                            <span className="price">1000</span>
                            <Link to="/">Add to cart</Link>
                          </div>
                        </div>
                      </ListItem>
                    </List>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="green-btn btn"
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  <em>
                    <img src={searchIcon} alt="search" />
                  </em>
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Header;
