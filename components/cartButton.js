import style from '../styles/cartButton.module.css';
import { useAppContext } from './stateWrapper';

const CartButton = ({item}) => {
const cart = useAppContext();
const handleClick =()=>{
cart.addItemToCart(item);
cart.openCart();

}

  return (
    <button className={style.button} onClick={handleClick}>Add to Cart</button>
  )
}

export default CartButton