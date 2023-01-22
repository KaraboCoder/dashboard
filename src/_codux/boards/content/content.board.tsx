import { createBoard } from '@wixc3/react-board';
import { Content } from '../../../components/content/content';
import Content_module from '../../../components/content/content.module.scss';

export default createBoard({
    name: 'Content',
    Board: () => <Content></Content>,
});
