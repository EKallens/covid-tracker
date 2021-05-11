import React from 'react';
import styles from './Footer.module.scss';
import "@fontsource/nunito-sans"
import rocketImg from './../../images/rocket.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img className={styles.image} src={rocketImg} alt="rocket"/>
            Made by <a href="https://www.ekallens.dev" target="_blank">EKallens</a>
        </footer>
    )
}

export default Footer;