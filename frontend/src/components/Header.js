import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-salao.png';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <span className={styles.logo}>
          <img src={logo} alt="logo" />
        </span>
        <span className={styles.nome}>
          <h1>Studio Beauty</h1>
        </span>
        <ul className={styles.menu}>
          <li><Link to="/AppointmentForm" className={styles.navbarLink}>Agendamento</Link></li>
          <li><Link to="#servicos" className={styles.navbarLink}>Serviços</Link></li>
          <li><Link to="/reviews" className={styles.navbarLink}>Reviews</Link></li>
          <li><Link to="#contato" className={styles.navbarLink}>Contato</Link></li>
          <li><Link to="/login" className={styles.navbarLink}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
