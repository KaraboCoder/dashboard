import styles from './credit-card.module.scss';
import classNames from 'classnames';
import MasterCardIcon from '../../assets/mastercard_logo.svg';
export interface CreditCardProps {
    className?: string;
}

export const CreditCard = ({ className }: CreditCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.top}>
                <div className={styles['top-left']}>
                    <p className={styles.title}>Current Balance</p>
                    <p className={styles.balance}>$5,750,20</p>
                </div>
                <img src={MasterCardIcon} alt="mastercard" />
            </div>
            <div className={styles.bottom}>
                <p className={styles['card-number']}>5282 3456 7890 1289</p>
                <p className={styles['expiry-date']}>09/25</p>
            </div>
        </div>
    );
};
