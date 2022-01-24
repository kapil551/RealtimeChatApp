import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    rootContainer: {
        flexDirection: "row",
        padding: 10,

    },
    inputContainer: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        flexDirection: 'row',
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#dedede',
        padding: 5,
        alignItems: "center"
    },
    input: {
        flex: 1,
        marginHorizontal: 5
    },
    icon: {
        marginHorizontal: 5,
    },
    buttonContainer: {
        backgroundColor: '#3777f0',
        width: 40,
        height: 40,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    }

});

export default styles;