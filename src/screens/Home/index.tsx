import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Lista de Compras</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Adicione um novo produto"
            placeholderTextColor={"#808080"}
          ></TextInput>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="pluscircleo" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
