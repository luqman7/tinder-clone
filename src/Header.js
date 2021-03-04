import React from 'react';
import "./Header.css";
import FaceIcon from '@material-ui/icons/Face';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton";

function Header() {
    return (
        //BEM
        <div className="header">
            <IconButton>
                <FaceIcon className="header__icon" fontSize="large" />
            </IconButton>
            <img
                className="header__logo" 
                src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" 
                alt="tinder logo"

            />
            <IconButton>
                <ForumIcon className="header__icon" fontSize="large" />
            </IconButton>
            
        </div>
    )
}

export default Header;
