import { Text, View, StyleSheet, Touchable, TouchableOpacity } from "react-native"
export default function Product({ title, price, quantity, modifyproduct, id }) {
    function plus() {
        modifyproduct(id, quantity + 1)
    }
    function minus() {
        if (quantity == 1) return
        modifyproduct(id, quantity - 1)
    }
    return (
        <View style={styles.container} >
            <View style={{
                flex: 1, backgroundColor: 'white', borderBottomStartRadius: 10,
                borderTopStartRadius: 10,
            }}>

            </View>
            <View style={{
                flex: 22, flexDirection: "row",
                justifyContent: 'space-between',
                paddingHorizontal: 10
            }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ color: 'white', }}>{title}</Text>
                    <Text style={{ color: 'white', }}>{quantity} x {price}Dhs / U</Text>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <TouchableOpacity
                        onPress={minus}
                    >
                        <Text style={styles.button}>-</Text>
                    </TouchableOpacity >
                    <Text style={{ color: 'white', fontSize: 30 }}>{quantity}</Text>
                    <TouchableOpacity
                        onPress={plus}
                    >
                        <Text style={styles.button}>+</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '90%',
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#2D2D2D',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
    },
    button: {
        height: 50, width: 50, textAlign: 'center',
        color: 'white', fontSize: 50, borderWidth: 2, borderRadius: 10,
        borderColor: 'white', paddingHorizontal: 8
    }

});