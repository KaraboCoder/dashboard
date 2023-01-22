import styles from './content.module.scss';
import classNames from 'classnames';
import { TobBar } from '../tob-bar/tob-bar';
import { Card } from '../card/card';
export interface ContentProps {
    className?: string;
}

export const Content = ({ className }: ContentProps) => {
    return (
        <div className={classNames(styles.root, className, styles.content)}>
            <TobBar />
            <div className={styles['content-wrapper']}>
                <div className={styles['content-wrapper__left']}></div>
                <div className={styles['content-wrapper__right']}>
                    <Card></Card>
                    <Card />
                </div>
            </div>
        </div>
    );
};
