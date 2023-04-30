import React from 'react';
import classes from './Header.module.css';
import HeaderCardButton from './HeaderCardButton';

import mealImage from '../../assets/meals.jpg';

const Header = (props) => {
    return (
        < React.Fragment>
            <header className={classes.header}>
                <h1>Food App</h1>
                <HeaderCardButton />
            </ header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="food" />
            </div>
        </ React.Fragment>
    );
};

export default Header;