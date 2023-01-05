import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en-US'>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          /> */}
            <meta name="facebook-domain-verification" content="xrmnk3ehb0sg78rri6cbtcml1o4j5e" />
            <script async src={`https://www.googletagmanager.com/gtag/js?${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                });
                `,
                }}
            />
            <script 
            type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: `{
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Sattva Connect",
                "url": "https://sattvaconnect.com/",
                "logo": "https://sattvaconnect.com/images/ban-logo.png",
                "sameAs": [
                  "https://www.facebook.com/sattvaconnect/",
                  "https://www.instagram.com/sattvaconnect/",
                  "https://twitter.com/SattvaConnect",
                  "https://sattvaconnect.com/",
                  "https://www.pinterest.ie/sattvaconnect/"
                ]}`
            }}
            />
              <script
                dangerouslySetInnerHTML={{
                    __html: `
                    (function(h,o,t,j,a,r){
                      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                      h._hjSettings={hjid:2804561,hjsv:6};
                      a=o.getElementsByTagName('head')[0];
                      r=o.createElement('script');r.async=1;
                      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                      a.appendChild(r);
                  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
                }}
            />
           {/* Google Tag Manager */}
              <script
              dangerouslySetInnerHTML={{
                __html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5S7QM4Q');
                `}}
              />
          {/* End Google Tag Manager */}
        </Head>
        <body>
          <Main />
          <NextScript />
         {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5S7QM4Q"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        </body>
      </Html>
    )
  }
}