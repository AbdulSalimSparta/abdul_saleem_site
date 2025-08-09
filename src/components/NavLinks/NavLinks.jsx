import style from "./NavLinks.module.css";
import navLinks from "../../Data/general";
import { useLocation, useNavigate } from "react-router-dom";

function NavLinks() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleClick = (e, id) => {
    e.preventDefault();

    if (isHomePage) {
      const el = document.getElementById(id);
      if (el) {
        if (window.lenis) {
          window.lenis.scrollTo(el);
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
        window.history.replaceState(null, "", `#${id}`);
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <ul className={style.list}>
      {navLinks.map((link) => (
        <li key={link.id}>
          <a href={`#${link.id}`} onClick={(e) => handleClick(e, link.id)}>
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
