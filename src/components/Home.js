import { Link } from "react-router-dom";
import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <h3>หน้าหลัก</h3>

            <p>
                เป็น Project React ที่ทำขึ้นเพื่อเรียนรู้การเขียน React ขั้นพื้นฐาน โดยสามารถดูรายละเอียดของพื้นฐานต่าง ๆ ได้ ดดยการเลือกเมนูที่อยู่ทางซ้ายมือ
            </p>

            <h3>รายละเอียดเกี่ยวกับ Demo ต่าง ๆ</h3>

            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3>Intro to JSX</h3>
                </div>               

                <p>
                    <a href="https://reactjs.org/docs/introducing-jsx.html" target="_blank" rel="noreferrer">Tutorial Link</a>
                </p>

                <div>
                    <Link to="/intro-jsx" className={styles.button}>See Demo</Link>
                </div>               
            </div>
        </>      
    )
}

export default Home