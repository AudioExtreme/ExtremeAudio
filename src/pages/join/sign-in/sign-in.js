import Link from "next/link";
import { JoinLayout } from "@/layouts";
import { LoginForm } from "@/components/Auth";
import { Seo } from "@/components/Shared";
import styles from "./sign-in.module.scss";
import Head from 'next/head';

export default function SignInPage() {
  return (
    <>
      
      <Seo title="Iniciar sesión"/>

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
          <h3>Iniciar sesión</h3>
          <LoginForm />

          <div className={styles.actions}>
            <Link href="/join/sign-up">¿No tienes una cuenta?</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
