import styles from './switch.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

export interface SwitchProps {
    className?: string;
}

export const Switch = ({ className }: SwitchProps) => {
    const [checked, setChecked] = useState(true);
    const onHandleChnage = () => {
        setChecked((a) => !a);
    };
    return (
        <div className={classNames(styles.switch, className)}>
            <label className={styles['switch-lbl']}>
                <input type="checkbox" checked={checked} onChange={onHandleChnage} />
                <span className={styles.slider} />
            </label>
        </div>
    );
};
