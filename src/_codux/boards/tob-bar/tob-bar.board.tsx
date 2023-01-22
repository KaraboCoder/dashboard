import { createBoard } from '@wixc3/react-board';
import { TobBar } from '../../../components/tob-bar/tob-bar';

export default createBoard({
    name: 'TobBar',
    Board: () => <TobBar />
});
