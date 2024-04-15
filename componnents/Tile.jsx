import { Text, View, StyleSheet, Pressable } from "react-native"
export default function Tile({ title, price,addproduct,id }) {
    return (
        <Pressable onPress={()=>addproduct(id)}>
        <View style={styles.container} >
            <View style={{flex: 1, backgroundColor:'#C9CAEF', borderBottomStartRadius: 10,
            borderTopStartRadius: 10,
        }}>

            </View>
            <View style={{ flex: 8 }}>

                <Text style={{ color: 'white', }}>{title}</Text>
                <Text style={{ color: 'white', }}>{price} Dh</Text>

            </View>
        </View>
        </Pressable>

    )
}
const styles = StyleSheet.create({
    container: {
        width: 110,
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#2D2D2D',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
    },
   
});