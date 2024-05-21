import mongoose from "mongoose"
var editeurSchema = mongoose.Schema({
maisonedit: String,
siteweb:String,
email:String

});
const Editeur = mongoose.models.Editeur || mongoose.model('Editeur',
editeurSchema);
//ce sont les auteurs du modèle Mongo s'ils existent ou un modèle mongoose
//le schéma auteur est déjà là donc il y a une vérification s'il existe déjà il ne faut pas essayer de le créer
//pour éviter l'erreur OverwriteModelError: Cannot overwrite `Auteur` modelonce compiled.
export default Editeur