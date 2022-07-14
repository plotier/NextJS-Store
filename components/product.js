import Link from "next/link"
import Image from "next/image"
import style from "../styles/product.module.css"

const Product = ({ item, showAs }) => {

    if (showAs == 'Page') {
        return <div>Page</div>
    }
    if (showAs == 'ListItem') {
        return <div>List Item</div>
    }

    return(
    <div className={style.item}>
        <div>
            <Link href={`/store/url-a-mi-componente`}>
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
                <Link href={`/store/url-a-mi-componente`}>
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