import Header from "../navigation/header";
import MoodTheme from "./utils/moodchangetheme";
import { SnackbarProvider } from "notistack";
export default function RootLayout({ children, items }) {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Header items={items} />

        <main> {children}</main>
        <MoodTheme />
      </SnackbarProvider>
    </>
  );
}
