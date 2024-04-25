import { AppRegistry } from "react-native";
import MyAdventurousWeather from "./src/MyAdventurousWeather";
import { AppProvider } from './src/context'

export default function App() {
	
	return (
		<AppProvider>
			<MyAdventurousWeather />
		</AppProvider>
	);
}

AppRegistry.registerComponent("main", () => App);