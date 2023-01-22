import styles from './card.module.scss';
import classNames from 'classnames';
export interface CardProps {
    className?: string;
    children?: React.ReactNode;
}

export const Card = ({ className, children }: CardProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
