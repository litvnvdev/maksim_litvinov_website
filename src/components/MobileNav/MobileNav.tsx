import { FC, PropsWithChildren, useState } from "react";

import { HEADER_MENU_ITEMS } from "../../shared/consts";

import {
  HamburgerButton,
  MenuContainer,
  MenuItem,
  MenuItems,
  SvgCloseMenuIcon,
  SvgMenuIcon,
  Title,
  Wrapper,
} from "./styles";

const MobileNav: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Title smooth to="#home">
        Litvinov.dev
      </Title>
      <HamburgerButton type="button" onClick={() => setOpen((v) => !v)}>
        {open ? <SvgCloseMenuIcon /> : <SvgMenuIcon />}
      </HamburgerButton>
      {open && (
        <MenuContainer>
          <MenuItems>
            {HEADER_MENU_ITEMS.map((item) => (
              <MenuItem
                onClick={() => setOpen(false)}
                smooth
                to={item.anchor}
                key={item.slug}
              >
                {item.name}
              </MenuItem>
            ))}
            {children}
          </MenuItems>
        </MenuContainer>
      )}
    </Wrapper>
  );
};

export default MobileNav;
