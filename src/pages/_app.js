// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }


import "@/styles/globals.css";
import { Roboto } from 'next/font/google'
import dynamic from "next/dynamic";
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

function App({ Component, pageProps }) {
  return <div className={roboto.className}>
    <Component {...pageProps} />
  </div>
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
