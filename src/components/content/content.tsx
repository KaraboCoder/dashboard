import styles from './content.module.scss';
import classNames from 'classnames';
import { TobBar } from '../tob-bar/tob-bar';
export interface ContentProps {
    className?: string;
}

export const Content = ({ className }: ContentProps) => {
    return (
        <div className={classNames(styles.root, className, styles.content)}>
            <TobBar />
        </div>
    );
};
