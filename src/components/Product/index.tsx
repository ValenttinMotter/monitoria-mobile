import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./styles";

type Props = {
  name: string;
  done: boolean;
  onRemove: () => void;
  onDone: () => void;
};

export const ProductCard = ({ name, done, onDone, onRemove }: Props) => {
  return (
    <View
      style={{ ...styles.container, borderColor: done ? "#D9D9D9" : "#808080" }}
    >
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={onDone}>
          {done ? (
            <FontAwesome name="check-circle" size={24} color="#7A4A9E" />
          ) : (
            <FontAwesome5 name="circle" size={24} color="#31C667" />
          )}
        </TouchableOpacity>
        <Text style={done ? styles.productDone : styles.productName}>
          {name}
        </Text>
      </View>
      <TouchableOpacity onPress={onRemove}>
        <FontAwesome name="trash-o" size={24} color="#262626" />
      </TouchableOpacity>
    </View>
  );
};
