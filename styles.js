import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#289fd2",
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#fff',
        width: '70%',
        height: 40,
        marginBottom: 15,
        borderRadius: 6,
        elevation: 10
    },
    logo: {
        height: '34%',
        marginTop: 100
    },
    botao: {
        width:470,
        flexDirection:"row",
        justifyContent: "space-evenly",
        marginTop:15
    },
    botao1: {
        width:90,
        height:40,
        borderRadius: 4,
        backgroundColor: "#87cefa",
        elevation: 3,
        opacity:0.9
    },
    nomeBotao: {
        color: "#fff",
        height:40,
        textAlign:"center",
        textAlignVertical: "center",
        fontSize: 15,

    },
    label: {
        textAlign: "center",
        color: "#fff",
        marginTop: 30,
        marginBottom: -10,
        fontSize: 15
    },
    botao2: {
        width:120,
        height:40,
        borderRadius: 4,
        backgroundColor: "#87cefa",
        elevation: 3,
        opacity:0.9
    },
});