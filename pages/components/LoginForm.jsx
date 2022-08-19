import 'antd/dist/antd.css';
import styles from "../../styles/Login.module.css"
import Head from "next/head"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';

export default function LoginForm() {

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
            email: event.target.email.value,
            senha: event.target.password.value,
        }
        const axios = require('axios').default;
        const url = "https://localhost:7139/";
        console.log(data.email);

        axios.post(`${url}Usuario/login?email=${data.email}&senha=${data.senha}`)
            .then(resp => {
                console.log(resp)
            })
            .catch(error => console.log(error))

    }
    return (
        <div className={styles.loginContainer}>

            <Head>
                <title>Login - ZDoc</title>
            </Head>

            <div className={styles.divImage}>
                <img src="/loginImage.svg" alt="imagem de login" className={styles.loginImage} />
            </div>

            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <h2 className={styles.titleLogin}>Olá, seja bem-vindo(a) à <span className={styles.logoSpan}>Z</span>Doc!</h2>
                <p className={styles.textLogin}>Digite seus dados para acessar o sistema!</p>

                <Input
                    placeholder="Digite seu email..."
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    className={styles.inputEmail}
                    id='email'
                    required
                />

                <Input.Password
                    placeholder="Digite sua senha..."
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    className={styles.inputPassword}
                    id='password'
                    required />

                <Button htmlType="submit" className={styles.submitBtn}>ENTRAR</Button>

            </form>
        </div>
    )
}
