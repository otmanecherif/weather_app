import { getDatabase, ref, set, get, child } from 'firebase/database';

const retirerVille = async (uid, nom) => {
	const db = getDatabase();
    const dbRef = ref(getDatabase());
    await get(child(dbRef, `users/${uid}`)).then((snapshot) => {
        let data = snapshot.val()
        if (!data.villes) {
            data.villes = []
        }
        data.villes = data.villes.filter(ville => ville.nom !== nom)
        const villeRef = ref(db, `users/${uid}`);
        set(villeRef, data);
    })
};

export default retirerVille;