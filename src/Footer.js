import React from "react";
import './Footer.css';
import img from './img/whatsapp.png'
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css'
const Footer = () => {
    let navigate = useNavigate();
    return (
        <div id="footer" className="h-15rem card relative flex w-screen ">

            <div className="p-2 ml-5 text-300 card flex flex-row h-2 m-2">
                <div className="w-25rem "></div>
                <ul className="p-0 pr-5 m-0">
                    <h5 className="font-medium text-lg text-400 m-2 ">Usefull Links</h5>

                    <li className="m-2 cursor-pointer hover:text-500">Contact</li>
                <li className="m-2 cursor-pointer hover:text-500">Know More</li>
                <li className="m-2 cursor-pointer hover:text-500">Pricing</li>
                    <li className="m-2 cursor-pointer hover:text-500">About</li>
                </ul>
                <ul className="p-0 pr-2 m-0">
                 <h5 className="font-medium text-lg text-400 m-2 ">Services </h5>

                    <li className="m-2 cursor-pointer hover:text-500">Web Development</li>
                <li className="m-2 cursor-pointer hover:text-500">SEO</li>
                <li className="m-2 cursor-pointer hover:text-500">Content Writing</li>
                    <li className="m-2 cursor-pointer hover:text-500">Database</li>
                </ul>
                <ul className="p-0 m-0 pr-5 mt-5">
                    <li className="m-2 cursor-pointer hover:text-500">Email</li>
                <li className="m-2 cursor-pointer hover:text-500">E-Commerce</li>
                
                </ul>

                <div className="flex bg-surface-0 relative bottom-0 h-4rem border-round shadow-1 flex-row m-2 p-2">
                    <h5 className="font-normal">Follow us...</h5>
                    <i className="pi pi-linkedin transition-duration-300 cursor-pointer linkedin m-2" style={{ fontSize: '2rem' }}></i>
                                        <i className="pi pi-whatsapp transition-duration-300 cursor-pointer whatsapp m-2" style={{ fontSize: '2rem' }}></i>

                    <i className="pi pi-facebook cursor-pointer transition-duration-300 facebook hover:twitter m-2" style={{ fontSize: '2rem' }}></i>
                    <i className="pi pi-twitter cursor-pointer transition-duration-300 twitter m-2" style={{ fontSize: '2rem' }}></i>
                </div>
            </div>
             
            <div className="h-3rem shadow-8 flex align-items-center justify-content-center absolute bottom-0 m-0 w-screen surface-0">
      <h5 className="primary-color-text font-normal opacity-30">© 2023 Copyright WebState</h5>
   
            </div>
            
         <a href="whatsapp://send?phone=9110835613">  <img  id="whatsapp" className="w-3rem shadow-8 h-3rem fixed bottom-0 m-3 p-1 right-0"  src={img} alt='dkjnsajc' />
                </a>    
</div>

    );

};

export default Footer;
