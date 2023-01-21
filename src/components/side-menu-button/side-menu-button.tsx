import styles from './side-menu-button.module.scss';
import classNames from 'classnames';
import { getSvgIcon } from '../../utils/getSvgIcon';
export interface SideMenuButtonProps {
    className?: string;
    icon: string;
    text: string;
}

export const SideMenuButton = ({ className, text, icon }: SideMenuButtonProps) => {
    const LeftIcon = getSvgIcon(icon);
    return (
        <div className={classNames(styles.root, className)}>
            <button className={styles.button}>
                {LeftIcon && <img src={LeftIcon} alt="icon" />}
                <span className={styles.text}>{text}</span>
            </button>
        </div>
    );
};
