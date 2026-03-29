import { FC, PropsWithChildren } from "react";

import { HEADER_MENU_ITEMS } from "../../shared/consts";

import { List, NavLink, NavMenu } from "./styles";

const Nav: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NavMenu>
      <h3 style={{ paddingLeft: "3rem", cursor: "pointer" }}>
        <NavLink smooth to="#home">
          Litvinov.dev
        </NavLink>
      </h3>
      <List>
        {HEADER_MENU_ITEMS.map((item) => (
          <NavLink smooth to={item.anchor} key={item.slug}>
            {item.name}
          </NavLink>
        ))}

        {children}
      </List>
    </NavMenu>
  );
};

export default Nav;
