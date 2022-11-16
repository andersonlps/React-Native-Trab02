import { Button, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { styles } from "../../../styles"
import { Inputs } from "../../../components/Inputs"

export const Buttons = () => {
    return (
        <View>
            <View style={styles.botao}>
                <View>
                <TouchableOpacity style={styles.botao1}>
                    <Text style={styles.nomeBotao}>Forgot?</Text>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity style={styles.botao1}>
                    <Text style={styles.nomeBotao}>Sign in</Text>
                </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.label}>Not a member?</Text>
            <View style={styles.botao}>
                <TouchableOpacity style={styles.botao2}>
                    <Text style={styles.nomeBotao}>Sign up now!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}