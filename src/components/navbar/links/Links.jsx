import Link from "next/link";
import styles from "./links.module.css";

const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Admin",
      path: "/admin",
    },
  ];
  return (
    <div className={styles.links}>
      {links.map((link) => (
        <Link key={link.title} href={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};
export default Links;
