import { createBoard } from '@wixc3/react-board';
import { CreditCard } from '../../../components/credit-card/credit-card';

export default createBoard({
    name: 'CreditCard',
    Board: () => <CreditCard />
});
