import Layout from "../components/layout";
import Product from "../components/product";
import { getLatestItems } from "../services/itemService";
import styleProduct from "../styles/product.module.css";
import style from "../styles/Home.module.css";


export default function Home({items}) {
  return (
<Layout title={"Bienvenido"}>
<div className={style.banner}>
<div className={style.bannerBackground}>
<div className={style.bannerInfo}>
  <h2>Shop the Summer 2022 Collection</h2>
  <p>Eindustry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containi</p>
  
  </div>
</div>
</div>
<h3>Latest Products</h3>

<div className={styleProduct.items}>
{
  items&&
  items.map(item=>
  <Product key={item.id} item={item} showAs='item'/>
  )
}

</div>
</Layout>
  )
}
export async function getStaticProps() {
  const res = await getLatestItems();

  return {
    props: {
      items: res,
    },
  };
}


