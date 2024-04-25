import getFullMeteo from "./meteo/getFullMeteo";

const uneVille = async ( ville ) =>{
    let result = {}
    return await getFullMeteo(ville.lat, ville.lng, ville.nom).then(res=>{
        if ( res.humidite > ville.humiditeMax || res.humidite < ville.humiditeMin ) {
            result.humidite = res.humidite;
        }
        if ( res.indiceUV > ville.indiceUVMax || res.indiceUV < ville.indiceUVMin ) {
            result.indiceUV = res.indiceUV;
        }
        if ( res.pluie & ville.pluie ) {
            result.pluie = res.pluie;
        }
        if ( res.temperature > ville.temperatureMax || res.temperature < ville.temperatureMin ) {
            result.temperature = res.temperature;
        }
        if ( res.visibilite < ville.visibiliteMin ) {
            result.visibilite = res.visibilite;
        }
        if ( res.vitesseVent > ville.vitesseVentMax ) {
            result.vitesseVent = res.vitesseVent;
        }
        return result;
    })
}

const quandNotifierUtilisateur = async (user) => {
	let tempUser = user;
    let notifs = []
    const dataGetter = () => tempUser.lieux.map(async (ville, index) => {
        await uneVille(ville).then(res=>{
            if (Object.keys(res).length !== 0) {
                notifs.push({ville:ville.nom, ...res});
            }
        })
    })
    return Promise.all(dataGetter()).then(()=>{
        return notifs;
    })
};

export default quandNotifierUtilisateur;