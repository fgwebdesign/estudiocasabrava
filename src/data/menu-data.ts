import { IMenuDT } from "@/types/menu-d-t";


const menu_data:IMenuDT[] = [
  {
    id: 1,
    title: 'Inicio',
    link: '/',
  },
  {
    id: 2,
    title: 'Proyectos',
    link: '/portfolio-grid-col-2',
  },
  {
    id: 3,
    title: 'Sobre nosotros',
    link: '/about-us',
  },
  {
    id: 4,
    title: 'Servicios',
    link: '/service',
  },
  // {
  //   id: 5,
  //   title: 'Contacto',
  //   link: '/contact-2',
  // },
];



export default menu_data;

// mobile menus 
export const mobile_menu_data:{
  id: number;
  title: string;
  link: string;
  dropdown_menus: {
      title: string;
      link: string;
  }[];
}[] = [
  {
    id: 1,
    title: 'Inicio',
    link: '/',
    dropdown_menus: []
  },
  {
    id: 2,
    title: 'Proyectos',
    link: '/portfolio-grid-col-2',
    dropdown_menus: []
  },
  {
    id: 3,
    title: 'Sobre nosotros',
    link: '/about-us',
    dropdown_menus: []
  },
  {
    id: 4,
    title: 'Servicios',
    link: '/service',
    dropdown_menus: []
  },
  // {
  //   id: 5,
  //   title: 'Contacto',
  //   link: '/contact-2',
  //   dropdown_menus: []
  // }
];