import { useAppContext } from './stateWrapper'
import Link from 'next/link'
import style from '../styles/menu.module.css'

const Menu = () => {
const cart = useAppContext();

const handleOpenCart= ()=>{
 cart.openCart();
}

    return (
        <nav className={style.menu}>
            <div>

                <Link href="/">
                    <a className={style.link}>Home</a>
                </Link>
                <Link href="/store">
                    <a className={style.link}>Store</a>
                </Link>
                <Link href="/faq">
                    <a className={style.link}>FAQ</a>
                </Link>
            </div>
            <div>
                <a className={style.link}onClick={handleOpenCart} href="#">Cart({cart.getNumberOfItems()})</a>
            </div>
        </nav>
    )
}

export default Menu