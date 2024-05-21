import mongoose from "mongoose"
var SpecialiteSchema = mongoose.Schema({
nomspecialite: String,

});
const Specialite = mongoose.models.Specialite || mongoose.model('Specialite',
SpecialiteSchema);
//ce sont les auteurs du modèle Mongo s'ils existent ou un modèle mongoose
//le schéma auteur est déjà là donc il y a une vérification s'il existe déjà il ne faut pas essayer de le créer
//pour éviter l'erreur OverwriteModelError: Cannot overwrite `Auteur` modelonce compiled.
export default Specialite