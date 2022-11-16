import { TextInput } from "react-native"
import { styles } from "../../../styles"

export const Inputs = () => {
    return (
        <>
            <TextInput
                style={styles.input}
                placeholder= " moinimalism"
                placeholderTextColor={"#1C1C1C"}
                
            />
            <TextInput
                style={styles.input}
                placeholder= " Password"
            />
        </>
    )
}