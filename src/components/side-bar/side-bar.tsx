import styles from './side-bar.module.scss';
import Logo from '../../assets/logo.svg';
import Avatar from '../../assets/avatar.svg';
import Moon from '../../assets/icons/moon.svg';
import DropdownIcon from '../../assets/icons/dropdown.svg';
import classNames from 'classnames';
import { SideMenuButton } from '../side-menu-button/side-menu-button';
import { Switch } from '../switch/switch';
export interface SideBarProps {
    className?: string;
}

const TopMenuItems = [
    { text: 'Dashboard', icon: 'menu' },
    { text: 'Analytics', icon: 'chart' },
    { text: 'My Wallet', icon: 'wallet' },
    { text: 'Accounts', icon: 'user' },
    { text: 'Settings', icon: 'settings' },
];

const BottomMenuItems = [
    { text: 'Security', icon: 'security' },
    { text: 'Help Center', icon: 'help' },
];

export const SideBar = ({ className }: SideBarProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={classNames(styles.root, className)}>
                <div className={styles['logo-wrapper']}>
                    <img src={Logo} alt="logo" />
                </div>
                <div className={styles['top-side-buttons-wrapper']}>
                    {TopMenuItems.map((item) => (
                        <SideMenuButton {...item} />
                    ))}
                </div>
                <div>
                    {BottomMenuItems.map((item) => (
                        <SideMenuButton {...item} />
                    ))}
                    <div className={styles['theme-switcher']}>
                        <img src={Moon} alt="moon" />
                        <span className={styles['theme-switcher-text']}>Dark Mode</span>
                        <Switch />
                    </div>
                </div>
                <div className={styles.user}>
                    <div className={styles.avatar}>
                        <img src={Avatar} alt="avatar" />
                    </div>
                    <div className={styles['user-details']}>
                        <h3>Ali Riaz</h3>
                        <p>Web Developer</p>
                    </div>
                    <img src={DropdownIcon} alt="dropdown" />
                </div>
            </div>
        </div>
    );
};
