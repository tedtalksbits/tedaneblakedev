import { NavMenuOne } from './NavOneElements';

function NavIcon({ color, small, id, passBool }) {

   const addClass = () => {

      // !passBool ? document.getElementById(id).classList.toggle('open') : document.getElementById(id).classList.toggle('open'); console.log(passBool);


      !passBool ? document.getElementById(id).classList.add('open') //add
         : console.log(!passBool);


   }
   return (
      <NavMenuOne onClick={addClass} id={id} color={color} small={small}>
         <span></span>
         <span></span>
         <span></span>
      </NavMenuOne>
   )
}

export default NavIcon;
