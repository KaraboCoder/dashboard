import classNames from 'classnames';
import styles from './search-input.module.scss';
import SearchIcon from '../../assets/icons/search.svg';

export interface SearchInputProps {
    className?: string;
}

export const SearchInput = ({ className }: SearchInputProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <input className={styles.input} placeholder="Search for anything...." />
            <img src={SearchIcon} className={styles.icon} alt="search" />
        </div>
    );
};
