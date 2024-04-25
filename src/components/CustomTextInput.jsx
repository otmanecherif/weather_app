import { TextInput } from 'react-native-paper';

const CustomTextInput = ({label, value, setValue, error, onchange, number, center, disabled}) => {
	return (
		<TextInput
			onChange={onchange?onchange:()=>{}}
			error={error?true:false}
			label={label}
			textAlign={center?'center':"left"}
			value={""+value}
			selectionColor={"#208BE8"}
			activeUnderlineColor={"#004AAC"}
			outlineStyle={{borderColor:"#004AAC"}}
			theme={{ colors: { primary: "#004AAC", outline: "#004AAC", background:"#fff" } }}
			outlineColor={"#004AAC"}
			onChangeText={value => setValue(value)}
			keyboardType={number?'phone-pad':"default"}
			mode='outlined'
			disabled={disabled?disabled:null}
	  	/>
	);

  };
  
  export default CustomTextInput;