import { getDatabase, ref, set, get, child } from 'firebase/database';

const ajouterVille = async (uid, nom, lat, lng) => {
	const db = getDatabase();
    const dbRef = ref(getDatabase());
    await get(child(dbRef, `users/${uid}`)).then((snapshot) => {
        let data = snapshot.val()
        if (!data.villes) {
            data.villes = []
        }
        data.villes.push({
            nom: nom,
            lat: lat,
            lng: lng,
            temperatureMin:0,
            temperatureMax:35,
            vitesseVentMax:30,
            humiditeMin:20,
            humiditeMax:80,
            indiceUVMin:0,
            indiceUVMax:10,
            visibiliteMin:1,
            pluie:true
        })
        const villeRef = ref(db, `users/${uid}`);
        set(villeRef, data);
    })
};

export default ajouterVille;