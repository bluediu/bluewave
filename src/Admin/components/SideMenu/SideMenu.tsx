import { ReactElement } from "react";

/* Libs components */
import { Menu, Sidebar, Segment } from "semantic-ui-react";

/* Components */
import { SideMenuItems } from "./SideMenuItems";

/* Hooks */
import { useLocation } from "react-router-dom";

import "./SideMenu.scss";

interface IProps {
  children: ReactElement | ReactElement[];
  visible: boolean;
  isTabletOrMobile: boolean;
  handleMenuVisible: (value: boolean) => void;
}

export const SideMenu = (props: IProps) => {
  const { children, visible, isTabletOrMobile, handleMenuVisible } = props;
  const { pathname } = useLocation();

  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="overlay"
        className="side-menu-admin__container"
        vertical
        visible={visible}
        width="thin"
      >
        <SideMenuItems
          pathname={pathname}
          handleMenuVisible={handleMenuVisible}
          isTabletOrMobile={isTabletOrMobile}
        />
      </Sidebar>
      <Sidebar.Pusher>
        <Segment basic>{children}</Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};
