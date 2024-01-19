import Link from "next/link";
import Head from "next/head";
import Footer from "@/components/Footer";
import Image from "next/image";
import styles from "@/styles/styles.module.css";

export default function Home() {
  return (
<div className={styles.container}>
  <Head>
    {/* con mayusculas, es componente y agregarlo con link */}
    <title>Solo mi pagina</title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

  </Head>

  {/* barra de navegacion */}
  <nav className={styles.navbar}>
    <Link href="#" className={styles.titulos}>Home</Link>

    <ul className={styles.navbarNav}>
      <li className={styles.navItem }>
        <Link href="/pages/ayuda" className={styles.navLink}>Ayuda</Link>
      </li>

      <li className={styles.navItem }>
        <Link href="/pages/sesion" className={styles.navLink}>Sesión</Link>
      </li>
    </ul>

  </nav>  
  <div className={styles.content}>

    <h1 className={styles.titulos}>Hello world</h1>

    <div className={styles.info}>
    <h2 className={styles.titulos}>Hoy es jueveeeeess!!!!</h2>
    <Image src="/pikachu.png" width={250} height={250} alt="imagen de kitty" className={styles.roundedImage} />   
  </div>
     </div>
    <Footer/>
</div>
   )
}