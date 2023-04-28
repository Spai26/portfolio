import Header from "../navigation/header";
import MoodTheme from "./utils/moodchangetheme";
export default function RootLayout({ children, items }) {
  return (
    <>
      <Header items={items} />

      <main> {children}</main>
      <MoodTheme />
    </>
  );
}
