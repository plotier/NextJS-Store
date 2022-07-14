import { getItems } from "../services/itemService";

export async function getPathsFromIds(){
    const items= await getItems();

    const ids = items.map(item=>{      
        return{
            params:{
                id:item.id
            }
        }

    })
    return ids;
}