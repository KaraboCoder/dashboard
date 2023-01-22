import styles from './stats-cards.module.scss';
import ArrowUp from '../../assets/icons/arrow-up.svg';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import classNames from 'classnames';
import { Component } from 'react';
export interface StatsCardsProps {
    className?: string;
    title: string;
    value: string;
    percentage: string;
    isIncreased: boolean;
    icon: 'up' | 'down';
}

export const StatsCards = ({
    className,
    title,
    value,
    percentage,
    isIncreased,
    icon,
}: StatsCardsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles['icon-wrapper'], icon)}>
                {icon === 'up' ? (
                    <img className={styles.icon} src={ArrowUp} alt="arrow-up" />
                ) : (
                    <img className={styles.icon} src={ArrowDown} alt="arrow-down" />
                )}
            </div>
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                <p className={styles.value}>{value}</p>
            </div>
            <div className={classNames(styles.chip, isIncreased ? 'green' : 'red')}>
                <p className={styles.percentage}>{percentage}</p>
            </div>
        </div>
    );
};
