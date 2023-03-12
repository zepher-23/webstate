import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './Navbar.css'
import { Card } from 'primereact/card';
import "primeicons/primeicons.css";
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import "primereact/resources/primereact.min.css";

const services = [
    {
      label: 'Web Development',
      icon: 'pi text-primary pi-fw pi-desktop',
      url: '/'
    },
    {
      label: 'E-Commerce',
      icon: 'pi text-primary pi-cart-plus',
      url: '/'
    },
    {
      label: 'Content Writing',
      icon: 'pi text-primary pi-fw pi-file-edit',
      url: '#about'
    },
    {
      label: 'SEO',
      icon: 'pi text-primary pi-fw pi-chart-line',
      url: '#Contact'
    },
    {
      label: 'Database',
      icon: 'pi text-primary pi-fw pi-database',
      url: '#'
    },
    {
      label: 'Email',
      icon: 'pi text-primary pi-fw pi-envelope',
      url: '#'
    }
];
  
const Navbar = () => {
    const menu = useRef(null);
    return (

        <div className="nav flex static w-screen  h-5rem align-items-center flex-row">
            <div id='logo' className='p-3'>Logo</div>
            <div id="nav-menu" className='flex mr-4 p-0 font-light justify-content-center align-items-center flex-row absolute right-0'> 
                <h4 className='p-2 mx-2 nav-menu-hover cursor-pointer font-normal'>About</h4>
                <Menu className ="surface-100 w-11rem m-0 p-0 flex text-sm border-none" popup model={services} ref={menu} />
          <h4 className='p-2 mx-2 nav-menu-hover cursor-pointer font-normal flex align-items-center' onClick={(e) => menu.current.toggle(e)}> Services <i className='pi pi-angle-down mt-1 ml-1'></i></h4>
          <h4 className='p-2 mx-2 nav-menu-hover cursor-pointer font-normal'>Price</h4>
                <h4 className='p-2 mx-2 nav-menu-hover cursor-pointer font-normal'>Contact</h4>
                <Button className='p-2 w-8rem justify-content-center shadow-8 mx-2 text-800 border-none hover:bg-primary-700 bg-primary-900 cursor-pointer font-normal'>Get Started</Button>
              
            </div>
            
            
</div>
    );

};

export default Navbar;
