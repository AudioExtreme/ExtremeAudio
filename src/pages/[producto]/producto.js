import { BasicLayout } from "@/layouts";
import { Producto } from "@/components/Producto";
import { Separator, Seo } from "@/components/Shared";
import Head from 'next/head';

export default function ProductoPage(props) {
  const { producto } = props;
  const wallpaper = producto.attributes.wallpaper;

  return (
    <>
      <Seo
        title={producto.attributes.title}
        description={producto.attributes.summary}
      />

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
        <Producto.HeaderWallpaper image={wallpaper.data.attributes.url} />
        <Producto.Panel productoId={producto.id} producto={producto.attributes} />

        <Separator height={25} />

        <Producto.Info producto={producto.attributes} />

        <Separator height={30} />

        <Producto.Media
          screenshots={producto.attributes.screenshots.data}
          video={producto.attributes.video}
        />

        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
