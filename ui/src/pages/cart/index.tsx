import React, { useState } from "react";
import { cartStyle } from "./style";
import { Typography, Button, Link, Tooltip } from "@material-ui/core";
import { materialCommonStyles } from "../../utils/materialCommonStyles";
import prodcutImage from "../../assets/images/dummy-image.jpg";

const Cart: React.FC = () => {
  const classes = cartStyle();
  const IncNum = (e: any): void => {
    const current_div_count: number =
      parseInt(e.target.closest(".qty-group").children[1].innerText) + 1;
    e.target.closest(".qty-group").children[1].innerText = current_div_count;
  };
  const DecNum = (e: any): void => {
    const current_div_count =
      parseInt(e.target.closest(".qty-group").children[1].innerText) - 1;
    if (current_div_count > 0)
      e.target.closest(".qty-group").children[1].innerText = current_div_count;
  };
  return (
    <div className={classes.cartWrapper}>
      <div className="container">
        <Typography variant="h1">Cart page</Typography>
        <div className="cart-heading-block">
          <Typography variant="h2">My Shopping Bag (3 Items)</Typography>
          <div className="total-price">Total price: 3000</div>
        </div>
        <div className="cart-list-wrapper">
          <div className="cart-list-item">
            <div className="cart-item-img">
              <Link>
                <img src={prodcutImage} alt="dummy-image" />
              </Link>
            </div>
            <div className="cart-item-content">
              <div className="cart-item-top-content">
                <div className="cart-item-left">
                  <p className="brand">Campus Sutra</p>
                  <Link>Cart item name</Link>
                </div>
                <div className="price-block">
                  <span className="current-price">MRP &#8377; 500</span>
                </div>
              </div>
              <div className="cart-item-bottom-content">
                <div className="qty-group">
                  <Button className="btn pink-btn" onClick={IncNum}>
                    +
                  </Button>
                  <span className="number-count">1</span>
                  <Button className="btn pink-btn" onClick={DecNum}>
                    -
                  </Button>
                </div>
                <Link>Remove</Link>
              </div>
            </div>
          </div>
          <div className="cart-list-item">
            <div className="cart-item-img">
              <Link>
                <img src={prodcutImage} alt="dummy-image" />
              </Link>
            </div>
            <div className="cart-item-content">
              <div className="cart-item-top-content">
                <div className="cart-item-left">
                  <p className="brand">Campus Sutra</p>
                  <Link>Cart item name</Link>
                </div>
                <div className="price-block">
                  <span className="current-price">MRP &#8377; 500</span>
                </div>
              </div>
              <div className="cart-item-bottom-content">
                <div className="qty-group">
                  <Button className="btn pink-btn" onClick={IncNum}>
                    +
                  </Button>
                  <span className="number-count">1</span>
                  <Button className="btn pink-btn" onClick={DecNum}>
                    -
                  </Button>
                </div>
                <Link>Remove</Link>
              </div>
            </div>
          </div>
          <div className="cart-list-item">
            <div className="cart-item-img">
              <Link>
                <img src={prodcutImage} alt="dummy-image" />
              </Link>
            </div>
            <div className="cart-item-content">
              <div className="cart-item-top-content">
                <div className="cart-item-left">
                  <p className="brand">Campus Sutra</p>
                  <Link>Cart item name</Link>
                </div>
                <div className="price-block">
                  <span className="current-price">MRP &#8377; 500</span>
                </div>
              </div>
              <div className="cart-item-bottom-content">
                <div className="qty-group">
                  <Button className="btn pink-btn" onClick={IncNum}>
                    +
                  </Button>
                  <span className="number-count">1</span>
                  <Button className="btn pink-btn" onClick={DecNum}>
                    -
                  </Button>
                </div>
                <Link>Remove</Link>
              </div>
            </div>
          </div>
          <div className="cart-list-item">
            <div className="cart-item-img">
              <Link>
                <img src={prodcutImage} alt="dummy-image" />
              </Link>
            </div>
            <div className="cart-item-content">
              <div className="cart-item-top-content">
                <div className="cart-item-left">
                  <p className="brand">Campus Sutra</p>
                  <Link>Cart item name</Link>
                </div>
                <div className="price-block">
                  <span className="current-price">MRP &#8377; 500</span>
                </div>
              </div>
              <div className="cart-item-bottom-content">
                <div className="qty-group">
                  <Button className="btn pink-btn" onClick={IncNum}>
                    +
                  </Button>
                  <span className="number-count">1</span>
                  <Button className="btn pink-btn" onClick={DecNum}>
                    -
                  </Button>
                </div>
                <Link>Remove</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-wrapper">
          <Button className="btn pink-btn">Place order</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
