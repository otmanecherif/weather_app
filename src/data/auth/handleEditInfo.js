import { getDatabase, ref, set } from "firebase/database";

const handleEditInfo = async (uid, nom, prenom, email, adresse, codePostal, pays, numVoie) => {
	const database = getDatabase();
    return await set(ref(database, 'users/' + uid),
    {
        email: email,
        nom : nom,
        prenom : prenom,
        adresse : adresse,
        pays : pays,
        codePostal : codePostal,
        numVoie : numVoie,
    })
};

export default handleEditInfo;
