import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasHeight: 1388,
        canvasWidth: 1216,
        windowWidth: 1440,
    },
});
