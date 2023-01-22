import { createBoard } from '@wixc3/react-board';
import { SearchInput } from '../../../components/search-input/search-input';

export default createBoard({
    name: 'SearchInput',
    Board: () => <SearchInput />
});
