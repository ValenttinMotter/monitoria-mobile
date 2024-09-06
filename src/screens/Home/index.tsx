import { Text, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Lista de Compras</Text>
      </View>
      <View style={styles.mainContainer}></View>
    </View>
  );
}
