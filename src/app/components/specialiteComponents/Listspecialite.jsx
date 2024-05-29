"use client"
import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material';
const Listspecialite = ({specialite}) => {
const columns = useMemo(
() => [
{
accessorKey: 'couverture',
header: 'COUVERTURE',
Cell: ({ cell}) => (
<Box
sx={{
display: 'flex',
alignItems: 'center',
gap: '1rem',
}}
>
<img
src={cell.getValue()}
alt="couverture"
height="50"
width="50"
/>

</Box>),
},
{
accessorKey: 'titre',
header: 'TITRE',
size: 100,
},
{
accessorKey: 'isbn',
header: 'ISBN',
size: 50,
},
{
accessorKey: 'annedition',
header: 'ANNEE',
size: 50,
},
{
accessorKey: 'prix',
header: 'PRIX',
size: 50,
},
{
accessorKey: 'qtestock',
header: 'QTE',
size: 50,
},
{
accessorFn: (originalRow) => originalRow.auteurs.map((aut,i)=>{
return <div key={i}>{aut.nomauteur}</div>
}),
id: 'aut._id',
header: 'AUTEURS',
},
{
accessorKey: 'specialite.nomspecialite',
header: 'SPECIALITE',
size: 50,
},
{
accessorKey: 'maised.maisonedit',
header: 'EDITEUR',
size: 50,
},
],
[specialite],
);
return (
<div>
<MaterialReactTable columns={columns} data={specialite} />;
</div>
)
}
export default Listspecialite