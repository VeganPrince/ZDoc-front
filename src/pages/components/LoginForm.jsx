import styles from "../../styles/Login.module.css"
import Head from "next/head"
import { Label } from 'reactstrap'
import { useForm } from 'react-hook-form'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext } from "react"
import { AuthContext } from "../../src/contexts/AuthContext"

export default function LoginForm() {

    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext)

    async function handleSignIn(data) {
        await signIn(data)
    }

    return (


        <div className={styles.loginContainer}>

            <Head>
                <title>Login - ZDoc</title>
            </Head>

            <div className={styles.divImage}>
                <img src="/loginImage.svg" alt="imagem de login" className={styles.loginImage} />
            </div>

            <form action="" method="post" className={styles.loginForm} onSubmit={handleSubmit(handleSignIn)}>
                <h2>Olá, bem-vindo(a)!</h2>

                <div className="form-floating mb-3">
                    <input
                        {...register('email')}
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com" />

                    <Label htmlFor="floatingInput">Email address</Label>
                </div>
                <div className="form-floating">
                    <input
                        {...register('password')}
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password" />
                    <Label htmlFor="floatingPassword">Password</Label>
                </div>

                <button type="submit" className={styles.loginButton}>ENTRAR</button>
            </form>
        </div>
    )
}