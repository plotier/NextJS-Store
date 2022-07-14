import { useAppContext } from "./stateWrapper"
import Product from './product'
import style from '../styles/shoppingCart.module.css'

const ShoppingCart = () => {

    const cart = useAppContext();
    return (
        <div className={style.shoppingCart} style={{display:cart.isOpen?'block':'none'}}>
            <button>Close</button>

            <div>Cart is Empty</div>

            <h3>Your Items</h3>
            <div>
                {cart.items.map(item=>(<Product key={item.id} item={item} showAs="ListItem" qty={item.qty}/>))}
            </div>

        </div>
    )
}

export default ShoppingCart