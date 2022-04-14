import React, { useState } from "react";
import { useTitle, useNavigation, useLogout } from "@pankod/refine-core";
import { AntdLayout, Menu, useMenu, Grid, Icons } from "@pankod/refine-antd";
import { antLayoutSider, antLayoutSiderMobile } from "./styles";
import "../../global.scss";

export const CustomSider: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const Title = useTitle();
  const { menuItems, selectedKey } = useMenu();
  const breakpoint = Grid.useBreakpoint();
  const { push } = useNavigation();

  const { mutate: logout } = useLogout();

  const isMobile = !breakpoint.lg;

  return (
    <AntdLayout.Sider
      collapsible
      collapsedWidth={isMobile ? 0 : 80}
      collapsed={collapsed}
      breakpoint="lg"
      onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}
      style={isMobile ? antLayoutSiderMobile : antLayoutSider}
    >
      {Title && <Title collapsed={collapsed} />}
      <Menu
        selectedKeys={[selectedKey]}
        mode="inline"
        onClick={({ key }) => {
          if (key === "logout") {
            logout();
            return;
          }

          if (!breakpoint.lg) {
            setCollapsed(true);
          }

          push(key as string);
        }}
      >
        {menuItems.map(({ icon, label, route }) => {
          const isSelected = route === selectedKey;
          return (
            <Menu.Item
              style={{
                fontWeight: isSelected ? "bold" : "normal",
              }}
              key={route}
              icon={icon}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {label}
                {!collapsed && isSelected && <Icons.RightOutlined />}
              </div>
            </Menu.Item>
          );
        })}

        {
          <Menu.Item key="logout" icon={<Icons.LogoutOutlined />}>
            Logout
          </Menu.Item>
        }
      </Menu>
    </AntdLayout.Sider>
  );
};
