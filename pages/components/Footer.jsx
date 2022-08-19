import styles from "../../styles/styledComponents/Footer.module.css";

export default function Footer() {
    
    var data = new Date();
    var ano = data.getFullYear();

    return (
        <>
            <footer className={styles.foot}>
                <div className={styles.left}>
                    ZDoc &copy; {ano}
                </div>
            </footer>
        </>
    )
}