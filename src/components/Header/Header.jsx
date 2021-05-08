import React from 'react';
import styles from './Header.module.scss';
import { ButtonsPanel } from '../../components';

const Header = () => {
    return (
        <div className={styles['header']}>
            <div className={styles['container']}>
                <div className={styles['logo__container']}>
                    <span className={styles['logo__text']}>Lo<span>Go</span></span>
                </div>
                <div className={styles['name__container']}>
                    <span className={styles['name__text']}>Task Manager</span>
                </div>
                {/*<div className={styles['buttons__container']}>*/}
                    <ButtonsPanel />
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Header;