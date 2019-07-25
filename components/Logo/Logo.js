import React from 'react'
import classes from './Logo.module.css'

import burgerLogo from '../../assets/images/burger-logo.png'


//burgerLogo will only get a address of image and then
//let weback know there is a image
const Logo = (props) => {
    //I use inline styling do override classes
    return (
    <div className={classes.Logo} style={{height: props.height}}>
            <img src={burgerLogo} alt="MyBurger"></img>
        </div>
    )
}

export default Logo
