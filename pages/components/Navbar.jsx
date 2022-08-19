import { CloseOutlined, FolderAddOutlined, FolderOpenOutlined, FolderOutlined, FormatPainterOutlined, HomeOutlined, QuestionCircleOutlined, SearchOutlined, SettingOutlined, UploadOutlined } from "@ant-design/icons"
import Link from "next/link"
import styles from "../../styles/styledComponents/NavBar.module.css"

export default function Navbar() {


    return (
        <>
            <header className={styles.top}>
                <Link href='/' >
                    <a>
                        <p className={styles.logo}> <span className={styles.zColor}>Z</span>Doc</p>
                    </a>
                </Link>


                <ul className={styles.list}>
                    <Link href="/home" >
                        <a className={styles.listItems}>
                            <HomeOutlined />
                            <li className={styles.listText}>Principal</li>
                        </a>
                    </Link>
                    <Link href="/remarq">
                        <a className={styles.listItems}>
                            <FolderOpenOutlined />
                            <li className={styles.listText}>Remarq</li>
                        </a>
                    </Link>
                    <Link href="/reqdoc">
                        <a className={styles.listItems}>
                            <FolderOutlined />
                            <li className={styles.listText}>ReqDoc</li>
                        </a>
                    </Link>
                    <Link href="/lancamentos">
                        <a className={styles.listItems}>
                            <UploadOutlined />
                            <li className={styles.listText}>Lançar</li>
                        </a>
                    </Link>
                    <Link href="/consulta">
                        <a className={styles.listItems}>
                            <SearchOutlined />
                            <li className={styles.listText}>Consultar</li>
                        </a>
                    </Link>
                    <Link href="/docplus">
                        <a className={styles.listItems}>
                            <FolderAddOutlined />
                            <li className={styles.listText}>DocPlus</li>
                        </a>
                    </Link>
                    <Link href="/material">
                        <a className={styles.listItems}>
                            <FormatPainterOutlined />
                            <li className={styles.listText}>Material</li>
                        </a>
                    </Link>
                    <Link href="/config">
                        <a className={styles.listItems}>
                            <SettingOutlined />
                            <li className={styles.listText}>Gerenciar</li>
                        </a>
                    </Link>
                    <Link href="/ajuda">
                        <a className={styles.listItems}>
                            <QuestionCircleOutlined />
                            <li className={styles.listText}>Ajuda</li>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={styles.listItems}>
                            <CloseOutlined />
                            <li className={styles.listText}>Sair</li>
                        </a>
                    </Link>
                </ul>

            </header>
        </>
    )
}