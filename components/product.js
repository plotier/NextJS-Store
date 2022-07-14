import Link from "next/link"
import Image from "next/image"
import style from "../styles/product.module.css"
import { convertToPath } from "../lib/utils";

const Product = ({ item, showAs, qty }) => {

    if (showAs === 'Page') {
        return (
            <div className={style.page}>
                <div className={style.image}>
                    <Image
                        src={item.data.image}
                        alt={item.data.description}
                        width={700}
                        height={700}>
                    </Image>

                </div>
                <div className={style.info}>
                    <div>
                        <h2>{item.data.title}</h2>
                    </div>

                    <div className={style.price}>
                        {item.data.price}
                    </div>

                    <div>
                        {item.data.description}
                    </div>
                    <div>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>)
    }
    if (showAs == 'ListItem') {
        return <div>List Item</div>
    }

    return (
        <div className={style.item}>
            <div>
                <Link href={`/store/${convertToPath(item.title)}`}>
                    <a>
                        <Image src={item.image}
                            alt={item.description}
                            width={500}
                            height={500}>
                        </Image>

                    </a>
                </Link>
            </div>
            <div>
                <h3>
                    <Link href={`/store/${convertToPath(item.title)}`}>
                        <a>
                            {item.title}
                        </a>
                    </Link>
                </h3>
            </div>

            <div>
                ${item.price}
            </div>
            <div>
                <button>
                    Add To Cart
                </button>
            </div>

        </div>)
}

export default Product