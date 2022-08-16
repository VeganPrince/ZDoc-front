import styles from "../../styles/Login.module.css"
import Head from "next/head"
import { Input, Label } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function LoginForm() {






    return (


        <div className={styles.loginContainer}>

            <Head>
                <title>Login - ZDoc</title>
            </Head>

            <div className={styles.divImage}>
                <img src="/loginImage.svg" alt="imagem de login" className={styles.loginImage} />
            </div>

            <form action="" method="post" className={styles.loginForm}>
                <h2>Olá, bem-vindo(a)!</h2>

                <div className="form-floating mb-3">
                    <Input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <Label forHTML="floatingInput">Email address</Label>
                </div>
                <div className="form-floating">
                    <Input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <Label forHTML="floatingPassword">Password</Label>
                </div>

                <button type="submit" className={styles.loginButton}>ENTRAR</button>
            </form>
        </div>
    )
}