import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
	return useContext(AppContext);
}

export function AppProvider({ children }) {
    const [user, setUser] = useState({
		user:{
			uid:"",
			nom:"",
			prenom:"",
			email:"",
			adresse:"",
			codePostal:"",
			pays:"",
			numVoie:""
		},
		lieux:[
			{
				nom:"Paris",
				temperature:"20",
				current:true
			},
			{
				nom:"Alger",
				temperature:"40",
			},
			{
				nom:"Montreal",
				temperature:"10",
			}
		],
	});
	// const [user, setUser] = useState({
	// 	user:{
	// 		uid:"",
	//		nom:"",
	// 		prenom:"",
	// 		email:"",
	// 		adresse:"",
	// 		codePostal:"",
	// 		pays:"",
	// 		numVoie:""
	// 	},
	// 	lieux:[],
	// });

	const setUserData = (uid, nom, prenom, email, adresse, code_postal,pays,numVoie,lieux) => {
		setUser({
			user:{
				uid:uid,
				nom:nom,
				prenom:prenom,
				email:email,
				adresse:adresse,
				codePostal:code_postal,
				pays:pays,
				numVoie:numVoie
			},
			lieux:lieux,
		});
	}
	const addCurrent = (current) => {
		setUser({...user, current:current});
	}
	const updateSeuils = (lieu, seuils) => {
		let tempUser = user;
		tempUser.lieux = user.lieux.map(l => {
			if(l.nom === lieu){
				l.temperatureMin = seuils.temperatureMin;
				l.temperatureMax = seuils.temperatureMax;
				l.vitesseVentMax = seuils.vitesseVentMax;
				l.humiditeMin = seuils.humiditeMin;
				l.humiditeMax = seuils.humiditeMax;
				l.indiceUVMin = seuils.indiceUVMin;
				l.indiceUVMax = seuils.indiceUVMax;
				l.visibiliteMin = seuils.visibiliteMin;
				l.pluie = seuils.pluie;
			}
			return l;
		});
		tempUser.current = tempUser.lieux.find(l => l.nom === tempUser.current.nom);
		setUser(tempUser);
	}
	const addLieu = (lieu) => {
		let tempUser = user;
		tempUser.lieux.push({
			nom:lieu.nom,
			lat:lieu.latitude,
			lng:lieu.longitude,
			temperatureMin:0,
			temperatureMax:35,
			vitesseVentMax:30,
			humiditeMin:20,
			humiditeMax:80,
			indiceUVMin:0,
			indiceUVMax:10,
			visibiliteMin:1,
			pluie:true
		});
		setUser(tempUser);
	}
	const removeLieu = (lieu) => {
		let tempUser = user;
		user.lieux = user.lieux.filter(l => l.nom !== lieu);
		setUser(tempUser);
	}
    return (
		<AppContext.Provider value={{user, setUserData, addLieu, addCurrent, removeLieu, updateSeuils}}>
		    {children}
		</AppContext.Provider>
	);
}
