import styles from './content.module.scss';
import classNames from 'classnames';
import { TobBar } from '../tob-bar/tob-bar';
import { Card } from '../card/card';
import { StatsCards } from '../stats-cards/stats-cards';
export interface ContentProps {
    className?: string;
}

export const Content = ({ className }: ContentProps) => {
    return (
        <div className={classNames(styles.root, className, styles.content)}>
            <TobBar />
            <div className={styles['content-wrapper']}>
                <div className={styles['content-wrapper__left']}>
                    <div className={styles.stats}>
                        <StatsCards
                            icon="down"
                            title="Total Income"
                            value="$632.000"
                            percentage="+1.29%"
                            isIncreased={true}
                        />
                        <StatsCards
                            icon="up"
                            title="Total Outcome"
                            value="$632.000"
                            percentage="-1.29%"
                            isIncreased={false}
                        />
                    </div>
                </div>
                <div className={styles['content-wrapper__right']}>
                    <Card></Card>
                    <Card />
                </div>
            </div>
        </div>
    );
};
