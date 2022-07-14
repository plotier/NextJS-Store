import Layout from "../../components/layout";
import Product from "../../components/product";
import { getPathsFromIds } from "../../lib/utils";

export default function ProductPage (){
    return( <Layout>
        <Product />
    </Layout>);
}

 export async function getStaticPaths(){
    const paths = await getPathsFromIds();

    return{
        paths:paths,   
        fallback:false
    }
 }