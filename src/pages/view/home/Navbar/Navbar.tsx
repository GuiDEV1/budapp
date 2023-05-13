import React from "react";

//navigate
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll';

//style
import { Nav } from "./NavbarStyle";
import { FiUserPlus, FiAlignRight, FiX } from "react-icons/fi";
import { useRef, useState } from "react";


export const Navbar = () => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const menuList: any = useRef();

  const menu = () => {
    setOpen(!open)

    const ul = menuList.current;
    ul.classList.toggle('open')

    window.addEventListener("scroll", () => {
        setOpen(false)
        const ul = menuList.current;
        ul.classList.remove('open')
      
    });
  }

  return (
    <Nav>
      <nav className="navbar">
        <Link to='home' spy={true}  offset={0} duration={0} className="logo"> 
        	Bud<span> App</span>
        </Link>

        <button className="menuMobile" onClick={menu}>
          {open ? (
            <FiX className="btn_menu"/>
          ): (
            <FiAlignRight className="btn_menu"/>
          )}
        </button>
       
      	<ul ref={menuList}>
          <li>
            <Link to='home' spy={true}  duration={500}> Início</Link>
          </li>
          <li>
            <Link to='erp' spy={true}  duration={500}> Nosso App</Link>
          </li>
          <li>
            <Link to='advantage' spy={true}  duration={500}> Vantagens</Link>
          </li>
          <li>
            <a onClick={() => navigate('/login')} className="login">Entrar</a>
          </li>
          <li>
            <a onClick={() => navigate('/register')} className="register">
              <FiUserPlus className="plus_Icon"/> 
              Cadastrar
            </a>
          </li>
        </ul>
      </nav>
    </Nav>
  )
}