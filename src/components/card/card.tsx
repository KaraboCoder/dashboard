import styles from './card.module.scss';
import classNames from 'classnames';
export interface CardProps {
    className?: string;
}

export const Card = ({ className }: CardProps) => {
    return <div className={classNames(styles.root, className)}></div>;
};
