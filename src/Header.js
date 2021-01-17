import React from "react";
import "./Header.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="header">
      <div className="headerTop">
        <div className="headerTop-left">
          <TwitterIcon className="icon" />
          <FacebookIcon className="icon" />
          <InstagramIcon className="icon" />
        </div>
        <div className="headerTop-right">
          <Button
            className="menubutton"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            USD <ExpandMoreOutlinedIcon className="icon" />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>USD</MenuItem>
            <MenuItem onClick={handleClose}>CAD</MenuItem>
            <MenuItem onClick={handleClose}>AUD</MenuItem>
            <MenuItem onClick={handleClose}>GBP</MenuItem>
            <MenuItem onClick={handleClose}>EUR</MenuItem>
            <MenuItem onClick={handleClose}>JPY</MenuItem>
          </Menu>
          <div className="login">
            <p>
              <PersonOutlineIcon className="icon" /> Login
            </p>
          </div>
          <div className="header__rightBasket">
            <ShoppingCartOutlinedIcon className="icon" />
            <span className="header__optionLineTwo header__BasketCount">0</span>
          </div>
        </div>
      </div>
      <div className="headerDown">
        <div className="headerDown-left">
          <img src="https://i.ibb.co/Cvt5219/company-Logo.png" alt="images" />
        </div>
        <div className="headerDown-right">
          <p>HOME</p>
          <p>SECURITY CAM'S</p>
          <p>CONTACT US</p>
          <p> ABOUT US</p>
          <p>FAQ</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
