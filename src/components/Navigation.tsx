import { FunctionComponent } from "react";
import NavItem from "./NavItem";

interface Props {
  className?: string;
  listClassName?: string;
  itemClassName?: string;
  buttonClassName?: string;
  closeMenu?: () => void;
  mobile?: boolean;
}

const Navigation: FunctionComponent<Props> = (props) => {
  const {
    className,
    listClassName,
    closeMenu = () => {},
    itemClassName,
    buttonClassName,
  } = props;

  return (
    <nav aria-label="main navigation" className={className}>
      <ul className={listClassName}>
        <NavItem
          title="Home"
          path="#home"
          closeMenu={closeMenu}
          className={itemClassName}
        />
        <NavItem
          title="About"
          path="#about"
          closeMenu={closeMenu}
          className={itemClassName}
        />
        <NavItem
          title="Features"
          path="#features"
          closeMenu={closeMenu}
          className={itemClassName}
        />
        <NavItem
          title="Media"
          path="#media"
          closeMenu={closeMenu}
          className={itemClassName}
        />
        <NavItem
          title="More Info"
          path="#learn-more"
          closeMenu={closeMenu}
          className={itemClassName}
        />
      </ul>
      <a
        href="https://share.lifeinfoapp.com/ddreNWnG"
        target="_blank"
        rel="noreferrer"
        aria-label="Join for just $60.00 Now"
        className={`btn-primary cursor-pointer px-12 ${buttonClassName}`}
        onClick={() => {
          closeMenu();
        }}
      >
        Buy now
      </a>
    </nav>
  );
};

export default Navigation;
