import {
  Alert,
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
  const [productName, setProductName] = useState<string>("");

  const handleProductAdd = () => {
    if (productName.trim() === "") {
      alert("Por favor, insira um nome para o produto.");
      return;
    }

    const isDuplicate = products.some(
      (product) => product.name === productName
    );
    if (isDuplicate) {
      Alert.alert("Produto existe", "Este produto já está na lista.");
      return;
    }

    const newProduct: Product = {
      name: productName,
      done: false,
    };
    setProducts([...products, newProduct]);
    setProductName("");
  };

  const handleProductRemove = (name: string) => {
    setProducts(products.filter((product) => product.name !== name));
  };

  const handleProductDone = (name: string) => {
    setProducts(
      products.map((product) =>
        product.name === name ? { ...product, done: !product.done } : product
      )
    );
  };

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
            keyboardType="default"
            onChangeText={setProductName}
            value={productName}
          />
          <TouchableOpacity style={styles.button} onPress={handleProductAdd}>
            <AntDesign name="pluscircleo" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.productWrapper}>
            <Text style={styles.productText}>Produtos</Text>
            <Text style={styles.productNumber}>{products.length}</Text>
          </View>
          <View style={styles.finishedWrapper}>
            <Text style={styles.finishedText}>Finalizados</Text>
            <Text style={styles.finishedNumber}>
              {products.filter((product) => product.done).length}
            </Text>
          </View>
        </View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ProductCard
              name={item.name}
              done={item.done}
              onRemove={() => handleProductRemove(item.name)}
              onDone={() => handleProductDone(item.name)}
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
