import styles from './content.module.scss';
import classNames from 'classnames';
import { TobBar } from '../tob-bar/tob-bar';
import { Card } from '../card/card';
import { StatsCards } from '../stats-cards/stats-cards';
import { CreditCard } from '../credit-card/credit-card';
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
                    <Card>
                        <h3 className={styles['card-header']}>My Card</h3>
                        <p className={styles['sub-header']}>Card Balance</p>
                        <p className={styles.value}>$15,595.015</p>
                        <CreditCard />
                        <div></div>
                    </Card>
                    <Card />
                </div>
            </div>
        </div>
    );
};
