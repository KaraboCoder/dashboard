import { createBoard } from '@wixc3/react-board';
import { SideMenuButton } from '../../../components/side-menu-button/side-menu-button';
const props = {
    icon: 'menu',
    text: 'Dashboard',
};
export default createBoard({
    name: 'SideMenuButton',
    Board: () => <SideMenuButton {...props} />,
});
