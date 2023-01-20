import { createBoard } from '@wixc3/react-board';
import { SideMenuButton } from '../../../components/side-menu-button/side-menu-button';

export default createBoard({
    name: 'SideMenuButton',
    Board: () => <SideMenuButton />
});
