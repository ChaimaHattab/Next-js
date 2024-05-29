
import Listauteurs from '@/app/components/auteurComponents/Listauteurs';
import { fetchAuteurs } from '@/services/auteurService';
const getAuteurs=async()=>{
const data=await fetchAuteurs()
return data;
}
const AuteurPage = async() =>{
const auteurs=await getAuteurs()
return (
<div>
<Listauteurs auteurs={auteurs}/>
</div>
)
}
export default AuteurPage