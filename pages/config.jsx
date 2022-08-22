import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import styles from "../styles/Config.module.css"
import Head from "next/head"
import { SnippetsOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { UserRegisterForm, UserEditForm } from "./components/UserForm";
import { CadEnterprise, EditEnterprise } from "./components/EnterpriseForm";
import Image from "next/image";

export default function Config() {

    let rendSwitch = ''
    let escopeForm = ''
    const [rend, setRend] = useState();
    const [form, setForm] = useState();

    function renderizarForm(numOp, typeForm) {
        switch (numOp) {
            case 1:
                if (typeForm === 1) {
                    escopeForm = <CadEnterprise />
                    setForm(escopeForm)
                } else if (typeForm === 2) {
                    escopeForm = <EditEnterprise />
                    setForm(escopeForm)
                }
                break;
            case 2:
                if (typeForm === 1) {
                    escopeForm = <CadEnterprise />
                    setForm(escopeForm)
                } else if (typeForm === 2) {
                    escopeForm = <EditEnterprise />
                    setForm(escopeForm)
                }
                break;
            case 3:
                if (typeForm === 1) {
                    escopeForm = <CadEnterprise />
                    setForm(escopeForm)
                } else if (typeForm === 2) {
                    escopeForm = <EditEnterprise />
                    setForm(escopeForm)
                }
                break;
            case 4:
                if (typeForm === 1) {
                    escopeForm = <CadEnterprise />
                    setForm(escopeForm)
                } else if (typeForm === 2) {
                    escopeForm = <EditEnterprise />
                    setForm(escopeForm)
                }
                break;
        }
    }

    function renderizarOptions(num) {
        switch (num) {
            case 1:
                rendSwitch =
                    <div className={styles.formSwitch}>
                        <div className={styles.btnGroup}>
                            <div className={styles.btnForms} onClick={(e) => renderizarForm(1, 1)}>Cadastrar empresa</div>
                            <div className={styles.btnForms} onClick={(e) => renderizarForm(1, 2)}>Editar informações</div>
                        </div>
                        {form}
                    </div>
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

                <h2 className={styles.titlePage}>Gerenciamento:</h2>

                <div className={styles.cardsAndForms}>
                    <div className={styles.cardsContainer}>

                        {/* O método renderizarForm() será acionado ao click para que o form seja renderizado */}

                        <div className={styles.divCard} onClick={(e) => renderizarOptions(1)}>
                            <Image alt="empresa" src="/enterprise.svg" width={50} height={50} />
                            <h3>Empresa</h3>
                        </div>
                        <div className={styles.divCard} onClick={(e) => renderizarOptions(2)}>
                            <Image alt="unidade" src="/enterpriseUnity.svg" width={50} height={50} />
                            <h3>Unidade</h3>
                        </div>
                        <div className={styles.divCard} onClick={(e) => renderizarOptions(3)}>
                            <SnippetsOutlined style={{ fontSize: '50px' }} />
                            <h3>Setor</h3>
                        </div>
                        <div className={styles.divCard} onClick={(e) => renderizarOptions(4)}>
                            <UserOutlined style={{ fontSize: '50px' }} />
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