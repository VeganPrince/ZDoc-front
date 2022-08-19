import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import styles from "../styles/Config.module.css"
import Head from "next/head"
import { BankOutlined, EditFilled, InfoCircleFilled, SettingFilled } from "@ant-design/icons";
import { useState } from "react";
import { UserRegisterForm, UserEditForm } from "./components/UserForm";

export default function Config() {
    
    let rendSwitch = ''
    const [rend, setRend] = useState();

    function renderizarForm(num) {
        switch (num) {
            case 1:
                rendSwitch = <div className={styles.formSwitch}><UserRegisterForm /></div>
                setRend(rendSwitch)
                break;
            case 2:
                rendSwitch = <div className={styles.formSwitch}><UserEditForm /></div>
                setRend(rendSwitch)
                break;
            case 3:
                rendSwitch = <div className={styles.formSwitch}><UserEditForm /></div>
                setRend(rendSwitch)
                break;
            case 4:
                rendSwitch = <div className={styles.formSwitch}><UserEditForm /></div>
                setRend(rendSwitch)
                break;
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Gerência - ZDoc</title>
            </Head>

            <Navbar />

            <main className={styles.main}>

                <h1 className={styles.titlePage}>Gerenciamento:</h1>

                <div className={styles.cardsAndForms}>
                    <div className={styles.cardsContainer}>

                        {/* O método renderizarForm() será acionado ao click para que o form seja renderizado */}

                        <div className={styles.divCard} onClick={(e) => renderizarForm(1)}>
                            <BankOutlined style={{ fontSize: '50px' }} />
                            <h3>Empresa</h3>
                        </div>
                        <div className={styles.divCard} onClick={(e) => renderizarForm(2)}>
                            <EditFilled style={{ fontSize: '50px' }} />
                            <h3>Unidade</h3>
                        </div>
                        <div className={styles.divCard} onClick={(e) => renderizarForm(3)}>
                            <InfoCircleFilled style={{ fontSize: '50px' }} />
                            <h3>Setor</h3>
                        </div>
                        <div className={styles.divCard} onClick={(e) => renderizarForm(4)}>
                            <InfoCircleFilled style={{ fontSize: '50px' }} />
                            <h3>Usuário</h3>
                        </div>
                    </div>

                    {rend}
                </div>



            </main>

            <Footer />
        </div>
    )
}