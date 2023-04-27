import { Fragment } from "react";
import Header from "../navigation/header";
export default function RootLayout({ children, items }) {
  return (
    <Fragment>
      <Header items={items} />
      {children}
    </Fragment>
  );
}
