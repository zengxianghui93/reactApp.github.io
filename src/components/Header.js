import React from 'react';
import styles from './BasicLauout.module.less';

const Header = ({ title }) => {
  return (
    <h2 className={styles['header-title']}>{title}</h2>
  )
};

export default Header;