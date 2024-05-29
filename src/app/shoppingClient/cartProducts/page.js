import React from "react";

import {fetchLivres} from "@/services/livreService";
import CartLivreItem from "@/app/components/client/shoppingCart/cartLivreItem";
async function getLivres(){
const data=await fetchLivres()
return data;
}
const CartLivresPage= async ()=> {
const livres = await getLivres();
return (
<>
<div className="row">
{livres && livres?.map((livre) => (

<CartLivreItem key={livre?._id} livre={livre} />
))}
</div>
</>
)
}
export default CartLivresPage;