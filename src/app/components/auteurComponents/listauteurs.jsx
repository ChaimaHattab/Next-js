"use client"
import { useMemo,useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import Button from 'react-bootstrap/Button';

import {deleteAuteur} from "@/services/auteurService"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import NewAuteurComponent from './NewAuteurComponent';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import UpdateAuteurComponent from './UpdateAuteurComponent';
const Listauteurs = ({auteurs}) => {
const [LesAuteurs,setLesAuteurs]=useState(auteurs)
//pour edit modal
const [show, setShow] = useState(false);
const handleShow = () => setShow(true);
const [auteur,setAuteur]=useState([])

const deleteauteur=(id)=>{
if(window.confirm("supprimer Editeur O/N")) {
deleteAuteur(id)
.then((res)=>{ console.log(res)
setLesAuteurs(LesAuteurs.filter((item)=>item._id!==id))
})
.catch(error=>{
console.log(error)
})

}
}

const columns = useMemo(
() => [
{
accessorKey: 'nomauteur',
header: 'NOM',
size: 100,
},
{
accessorKey: 'email',
header: 'EMAIL',
size: 100,
},
{
accessorKey: 'numtel',

header: 'NUMTEL',
size: 100,
},
{
accessorKey: '_id',
header: 'actions',
size: 100,
Cell: ({ cell, row }) => (
<div >
<Button
onClick={()=>{setAuteur(cell.row.original);handleShow()}}
variant="success"
size="md"
className="text-success btn-link edit"
>
<EditOutlinedIcon/>
</Button>
<Button
onClick={(e) => {
deleteauteur(cell.row.original._id,e);
}}
variant="danger"
size="md"
className="text-danger btn-link delete"
>
<DeleteForeverIcon />
</Button>
</div>
),
},
],
[LesAuteurs],
);
return (
<div>
<NewAuteurComponent LesAuteurs={LesAuteurs}
setLesAuteurs={setLesAuteurs}/>
<MaterialReactTable columns={columns} data={LesAuteurs} />
{show ? <UpdateAuteurComponent ed={auteur} LesAuteurs={LesAuteurs}
setLesAuteurs={setLesAuteurs} show={true} setShow={setShow} /> : null}
</div>
)
}
export default Listauteurs