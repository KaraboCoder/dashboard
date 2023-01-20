import styles from './content.module.scss';
import classNames from 'classnames';
export interface ContentProps {
    className?: string;
}

export const Content = ({ className }: ContentProps) => {
    return (
        <div className={classNames(styles.root, className, styles.content)}>
            <h3 className={styles['welcom-header-text']}>Welcome Back, Ali 👋</h3>
            <p className={styles['welcome-subtext']}>
                Here’s what’s happening with your store today.
            </p>
        </div>
    );
};
