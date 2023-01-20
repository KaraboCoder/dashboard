import styles from './App.module.scss';
import { SideBar } from './components/side-bar/side-bar';
import { Content } from './components/content/content';

function App() {
    return (
        <div className={styles.App}>
            <SideBar></SideBar>
            <Content />
        </div>
    );
}

export default App;
