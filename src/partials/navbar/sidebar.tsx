"use client";
import React from "react";

import {HomeOutlined} from "@ant-design/icons";
import type {MenuProps} from "antd";
import {Menu} from "antd";
import {colors} from "@/assets";
import {useRouter} from "next/navigation";
import styles from "./sidebar.module.scss";

type MenuItem = Required<MenuProps>["items"][number];
const items_ = [
  {name: "Home", href: "/", icon: <HomeOutlined />},
  {name: "About Us", href: "/about-us"},
  {name: "I.T Solutions", href: "/it-solutions"},
  {name: "EduTech", href: "/edu-tech"},
  {name: "Contact Us", href: "/contact-us"},
];

// const items: MenuItem[] = [
//     {
//         key: '/',
//         label: 'Home',
//         icon: <MailOutlined />,

//     },
//     {
//         key: '/about-us',
//         label: 'About Us',
//         icon: <AppstoreOutlined />,

//     },
//     // {
//     //     type: 'divider', ///----------divider here
//     // },
//     {
//         key: 'sub4',
//         label: 'Navigation Three',
//         icon: <SettingOutlined />,

//     },
// ];
const items: MenuItem[] = items_.map((item) => ({
  key: item.href,
  label: item.name,
  icon: item.icon,
}));

interface SidebarProps {
  isOpen?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({isOpen = false}) => {
  const router = useRouter();
  const onClick: MenuProps["onClick"] = (e) => {
    console.log(e.key);
    router.push(e.key);
  };

  return (
    <div className={`${styles.sidebarWrapper} ${isOpen ? styles.open : ""}`}>
      <Menu
        onClick={onClick}
        style={{
          backgroundColor: colors.white,
          color: "#fff",
        }}
        className={styles.sidebar}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode='inline'
        items={items}
      />
    </div>
  );
};

export {Sidebar};
