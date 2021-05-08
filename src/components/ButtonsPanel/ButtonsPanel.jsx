import React from 'react';
import styles from './ButtonsPanel.module.scss';
import { Button } from '../../ui';

const ButtonsPanel = () => {
    return (
        <div className={styles['buttons-panel']}>
            <Button
                name='signIn'
                value='SIGN IN'
                action={(event) => console.log(event.target.value)}
            />
            <Button
                name='signUp'
                value='SIGN UP'
                action={(event) => console.log(event.target.value)}
            />
        </div>
    );
};

export default ButtonsPanel;