import { NavLink } from "react-router-dom";
import estilus from './estilus.module.css';



export const Domus = () => {

  const { titulus,botones, } = estilus;

  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('hover');
    });
  
    item.addEventListener('mouseleave', () => {
      item.classList.remove('hover');
    });
  });

  
  
  return (
      <>

      
      <header>
        <h1 id="title" className={titulus}></h1>
        <div id="titulus-img" className="titulus-img"></div>
      </header>
     

       <div className={botones}> 
          <NavLink to={'../domus'}>Inicio</NavLink>
          <NavLink to={'../ilustraciones'}>Ilustraciones</NavLink>
          <NavLink to={'../diseño'}>Diseño</NavLink>
          <NavLink to={'../fotografia'}>Fotografia</NavLink>
          <NavLink to={'../about'}>About</NavLink>
      </div> 

 
      </>
   
   
  )
}
