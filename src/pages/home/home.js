import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator, BarTrust, BannerAd, Seo } from "@/components/Shared";
import Head from 'next/head';

const categoryId = {
  speakers: 1,
  equalizadores: 2,
  pantallas: 3,
  radios: 4,
  accesorios: 5,
};

export default function HomePage() {
  return (
    <>
     
     <Seo/>

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

      <BasicLayout>
        
        <Home.BannerLastProductoPublished 
        image="/images/Banner.jpg"
        />

        <Separator height={50} />

        <Container>
          <Home.LatestProductos title="Productos más recientes" />
        </Container>

        <Separator height={100} />

        <BarTrust />

        <Separator height={100} />

        <Container>
          <Home.LatestProductos
            title="Speakers"
            limit={3}
            categoryId={categoryId.speakers}
          />
        </Container>

        <Separator height={100} />

        <BannerAd
          title="Fácil, rápido y seguro"
          subtitle="Compra tus productos y recíbelos en casa"
          btnTitle="Ingresar"
          btnLink="/account"
          image="/images/Banner3.png"
        />

        <Separator height={50} />

        <Container>
          <Home.LatestProductos
            title="Pantallas"
            limit={3}
            categoryId={categoryId.pantallas}
          />
        </Container>

        <Separator height={100} />
      </BasicLayout>
    </>
  );
}
