import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    maxWidth: "100%",
    height: 56,
    borderWidth: 1,
    borderColor: "#808080",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  wrapper: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  productName: {
    color: "#262626",
    fontSize: 14,
    fontWeight: "400",
  },
  productDone: {
    textDecorationLine: "line-through",
  },
});
