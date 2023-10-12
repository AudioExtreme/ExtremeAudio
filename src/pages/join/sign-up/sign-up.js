import Link from "next/link";
import { JoinLayout } from "@/layouts";
import { RegisterForm } from "@/components/Auth";
import { Seo } from "@/components/Shared";
import styles from "./sign-up.module.scss";
import Head from 'next/head';

export default function SignUpPage() {
  return (
    <>

      <Seo title="Registrarse"/>

    <Head>
        {/* Agrega tus etiquetas de Google Tag Manager aquí */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-42911K2147"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-42911K2147');
          `}
        </script>
      </Head>

      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Crea tu cuenta</h3>
          <RegisterForm />

          <div className={styles.actions}>
            <Link href="/join/sign-in">Atras</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
