import { getDatabase, ref, set, get, child } from 'firebase/database';

const handleUpdateSeuils = async (uid, nom, seuils) => {
    console.log(uid, nom, seuils);
    const db = getDatabase();
    const dbRef = ref(getDatabase());
    await get(child(dbRef, `users/${uid}`)).then((snapshot) => {
        let data = snapshot.val()
        let temp = []
        data.villes.forEach(element => {
            let tempElt = element
            if ( tempElt.nom === nom ) {
                temp.push({
                    nom: tempElt.nom,
                    lat: tempElt.lat,
                    lng: tempElt.lng,
                    ...seuils
                })
            }else{
                temp.push(tempElt)
            }
        });
        data.villes = temp
        const villeRef = ref(db, `users/${uid}`);
        set(villeRef, data);
    })
}

export default handleUpdateSeuils