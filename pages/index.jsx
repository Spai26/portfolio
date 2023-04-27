import Head from "next/head";

import RootLayout from "../components/layout";
export default function Home() {
  return (
    <div className="home">
      <RootLayout>
        <main>Hello here!</main>
      </RootLayout>
    </div>
  );
}
