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
                    <li>
                        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                            <path fill="black" d="M9 12H6V10H9V12M13.5 10H10.5V12H13.5V10M18 10H15V12H18V10M18 6H6V9H18V6M20 5H4L4 19L20 19L20 5L20 5M20 3C21.1 3 22 3.9 22 5V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V5C2 3.9 2.9 3 4 3H20M9 13H6V15H9V13M13.5 13H10.5V15H13.5V13M18 13H15V15H18V13M9 16H6V18H9V16M13.5 16H10.5V18H13.5V16M18 16H15V18H18V16Z" />
                        </svg>
                        <Link to='/responsive-layout'>CSS Only Responsive Layout</Link>
                    </li>
                    <li>
                        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                            <path fill="black" d="M9 12H6V10H9V12M13.5 10H10.5V12H13.5V10M18 10H15V12H18V10M18 6H6V9H18V6M20 5H4L4 19L20 19L20 5L20 5M20 3C21.1 3 22 3.9 22 5V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V5C2 3.9 2.9 3 4 3H20M9 13H6V15H9V13M13.5 13H10.5V15H13.5V13M18 13H15V15H18V13M9 16H6V18H9V16M13.5 16H10.5V18H13.5V16M18 16H15V18H18V16Z" />
                        </svg>
                        <Link to='/responsive-layout-example'>CSS Only Responsive Layout Example</Link>
                    </li>
                    <li>
                        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                            <path fill="black" d="M9 12H6V10H9V12M13.5 10H10.5V12H13.5V10M18 10H15V12H18V10M18 6H6V9H18V6M20 5H4L4 19L20 19L20 5L20 5M20 3C21.1 3 22 3.9 22 5V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V5C2 3.9 2.9 3 4 3H20M9 13H6V15H9V13M13.5 13H10.5V15H13.5V13M18 13H15V15H18V13M9 16H6V18H9V16M13.5 16H10.5V18H13.5V16M18 16H15V18H18V16Z" />
                        </svg>
                        <Link to='/shop'>Shop</Link>
                    </li>
                </ul>
            </div>
        </>
    )
};

export default AllMenu;