import { Link } from 'react-router-dom';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import styles from './AllMenu.module.css';

const AllMenu = () => {
    return (
        <>
            <div className={styles.allMenuContainer}>
                <ul className={styles.allMenuList}>
                    <li>
                        <AccessAlarmIcon />
                        <Link to='/route1'>Material Design UI Get Started</Link>
                    </li>
                    <li>
                        <AccessAlarmIcon />
                        <Link to='/route2'>Material UI Grid</Link>
                    </li>
                    <li>
                        <AccountBoxIcon />
                        <Link to='/login'>Material UI Login Page</Link>
                    </li>
                </ul>
            </div>
        </>
    )
};

export default AllMenu;