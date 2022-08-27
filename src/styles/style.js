import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    backgroundCard: {
        minHeight: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        backgroundColor: "rgba(255,255,255,0.8)",
        margin: 10,
        padding: 10,
        width: 300,
        borderRadius: 5,
        borderBottomColor: "yellow",
        borderBottomWidth: 2
    },
    signInText: {
        color: "white"
    },
    cardButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    buttonAdd: {
        backgroundColor: "yellow",
        color: "red",
        borderRadius: 10,
        padding: 10,
        borderWidth: 2,
        elevation: 5
    },
    nameCard: {
        backgroundColor: "rgba(255,255,255,0.8)",
        borderRadius: 10,
        padding: 10,
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    delButton: {
        backgroundColor: "red",
        padding: 5,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 5
    },
    mainNameCard: {
        height: 300
    }
})


export default styles