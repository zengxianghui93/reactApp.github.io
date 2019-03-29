import React from 'react';
import styles from './BasicLauout.module.less';

const Header = ({ title }) => {
  return (
    <div className={styles['mini-header-title']}>{title}</div>
  )
};

export default Header;