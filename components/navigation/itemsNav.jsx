import { navigations } from "../utils/data";
import styles from "./Header.module.css";

const MenuItems = () => {
  return (
    <ul className={`${styles.nav_menu} ${styles.nav}`} id="pp-menu">
      {navigations.map((items) => (
        <li data-menuanchor="work" className="active" key={items.id}>
          <a className={styles.nav_link} href={` #${items.href}`}>
            {items.icon}
            <span>{items.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
