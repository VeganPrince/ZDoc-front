import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import axios from 'axios';
import { useEffect, useState } from 'react';

const url = 'https://localhost:7139/Usuario/id?id=2';

export default function Home() {

  const [user, setUser] = useState([])

  useEffect(() => {
    axios.get(url)
      .then(resp => {
        const dadosUser = resp.data
        setUser(dadosUser)
      })
      .catch(error => console.log(error))
  }, []);

  return (

    <div className={styles.container}>
      <Head>
        <title>ZDoc</title>
        <meta name="description" content="ZDoc tecnologia em gestão documental" />
        <link rel="icon" href="/favicon.ico" />
        <meta name='charset' content='utf-8' />
        <meta name="keywords" content="documentos, gestão documental, ZDoc"></meta>
      </Head>

      <Navbar className={styles.navbar} />

      <main className={styles.main}>
        <h1 className={styles.titleMain}>Seja bem-vindo(a), <span className={styles.userName}>{user.nome}</span>!</h1>
        <p>E-mail: {user.email} <br /> Telefone: {user.telefone} <br /> Unidade Federativa: {user.uf}</p>
      </main>

      <Footer className={styles.footer} />
    </div>
  )
}