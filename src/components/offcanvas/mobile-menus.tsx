import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mobile_menu_data } from "@/data/menu-data";
import shop_banner from '@/assets/img/menu/shop-menu/banner-1.jpg';
import port_img from '@/assets/img/menu/portfolio-menu/portfolio.png';

export default function MobileMenus() {
  const [navTitle, setNavTitle] = React.useState<string>("");

  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <nav className="tp-main-menu-content">
      <ul>
        {mobile_menu_data.map((menu) => (
          <li key={menu.id} className="has-dropdown">
            <Link href={menu.link} className="pointer" style={{ color: '#ffffff' }}>
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
