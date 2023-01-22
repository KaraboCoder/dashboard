import styles from './tob-bar.module.scss';
import classNames from 'classnames';
import { SearchInput } from '../search-input/search-input';
export interface TobBarProps {
    className?: string;
}

export const TobBar = ({ className }: TobBarProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={classNames(styles.root, className)}>
                <div>
                    <h3 className={styles['welcom-header-text']}>Welcome Back, Ali 👋</h3>
                    <p className={styles['welcome-subtext']}>
                        Here’s what’s happening with your store today.
                    </p>
                </div>
                <SearchInput />
            </div>
        </div>
    );
};
