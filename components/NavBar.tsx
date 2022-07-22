import { ActiveLink } from './ActiveLink';
import navstyles from '../styles/NavBar.module.css';

const menuList = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing/pricing'
  },
];


export const NavBar = () => {
  
  return (
    <nav className={ navstyles['menu-container']}>
      {
        menuList.map( (menu) => (
          <ActiveLink text={ menu.text } href={ menu.href } key={ menu.text } />
        ))
      }
       
    </nav>
  )
}
