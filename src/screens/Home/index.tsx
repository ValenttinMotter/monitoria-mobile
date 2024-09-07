import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import shoppingList from "../../assets/shopping_list.png";
import { ProductCard } from "../../components/Product";
import { Product } from "../../@types/Product";
import { useState } from "react";

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

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
        <View style={styles.infoContainer}>
          <View style={styles.productWrapper}>
            <Text style={styles.productText}>Produtos</Text>
            <Text style={styles.productNumber}>0</Text>
          </View>
          <View style={styles.finishedWrapper}>
            <Text style={styles.finishedText}>Finalizados</Text>
            <Text style={styles.finishedNumber}>0</Text>
          </View>
        </View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ProductCard
              name={item.name}
              done={false}
              onRemove={() => console.log()}
              onAdd={() => console.log()}
            />
          )}
          ListEmptyComponent={
            <View style={styles.emptyListContainer}>
              <Image source={shoppingList} />
              <Text style={styles.strongText}>
                Você ainda não tem produtos na lista de compras
              </Text>
              <Text style={styles.normalText}>
                Adicione produtos e organize sua lista de compras
              </Text>
            </View>
          }
        />
      </View>
    </View>
  );
};
