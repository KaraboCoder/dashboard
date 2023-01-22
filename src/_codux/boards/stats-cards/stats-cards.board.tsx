import { createBoard } from '@wixc3/react-board';
import { StatsCards } from '../../../components/stats-cards/stats-cards';

export default createBoard({
    name: 'StatsCards',
    Board: () => (
        <StatsCards title={''} value={''} percentage={''} isIncreased={false} icon={'up'} />
    ),
});
