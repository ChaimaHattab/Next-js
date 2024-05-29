
import Listspecialite from "@/app/components/specialiteComponents/Listspecialite";
import { fetchSpecialites } from "@/services/specialiteService";
const getSpecialites=async()=>{
const data=await fetchSpecialites()
return data;
}
const SpecialitePage = async() =>{
const specialites=await getSpecialites()
return (
<div>
<Listspecialite specialites={specialites}/>
</div>
)
}
export default SpecialitePage