import { useEffect, useState } from "react";
import "../src/styles/app.css";
import PreLoader from "@/src/components/layout/utils/preloader";

export default function App({ Component, pageProps }) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);
  return (
    <>
      {load && <PreLoader />}
      <Component {...pageProps} />
    </>
  );
}
