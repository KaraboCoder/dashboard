import chart from '../assets/icons/bar-line-chart.svg';
import helpCircle from '../assets/icons/help-circle.svg';
import menu from '../assets/icons/menu.svg';
import wallet from '../assets/icons/wallet.svg';
import user from '../assets/icons/user.svg';
import settings from '../assets/icons/settings.svg';
import shield from '../assets/icons/shield-tick.svg';

export const getSvgIcon = (name: string) => {
    switch (name) {
        case 'chart':
            return chart;
        case 'help':
            return helpCircle;
        case 'menu':
            return menu;
        case 'wallet':
            return wallet;
        case 'user':
            return user;
        case 'settings':
            return settings;
        case 'security':
            return shield;
        default:
            return null;
    }
};
