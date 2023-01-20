import styles from './side-bar.module.scss';
import Logo from '../../assets/logo.svg';
import classNames from 'classnames';
export interface SideBarProps {
    className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['logo-wrapper']}>
                <Logo />
            </div>
        </div>
    );
};
