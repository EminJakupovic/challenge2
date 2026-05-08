// ProductScreen.js

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const products = [
  {
    id: 1,
    title: "iPhone 15",
    category: "Smartphone",
    brand: "Apple iPhone",
    stock: "Stock: Yes",
    price: "$1200",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Nike Shoes",
    category: "Running Shoes",
    brand: "Stock: Yes",
    stock: "Stock: Yes",
    price: "$150",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Modern Chair",
    category: "Furniture",
    brand: "Premium Design",
    stock: "Stock: Yes",
    price: "$320",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {products.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.infoContainer}>
              <Text style={styles.title}>{item.title}</Text>

              <Text style={styles.smallText}>{item.category}</Text>
              <Text style={styles.smallText}>{item.brand}</Text>
              <Text style={styles.smallText}>{item.stock}</Text>

              <Text style={styles.price}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={22} color="black" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="compass" size={22} color="black" />
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={22} color="black" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },

  scrollContainer: {
    padding: 15,
    paddingBottom: 90,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    marginBottom: 18,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 4,
  },

  image: {
    width: "100%",
    height: 180,
  },

  infoContainer: {
    padding: 15,
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 4,
  },

  smallText: {
    fontSize: 13,
    color: "#777",
    marginTop: 1,
  },

  price: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: "bold",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    height: 70,
    backgroundColor: "#fff",

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    borderTopWidth: 1,
    borderColor: "#ddd",
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    fontSize: 12,
    marginTop: 4,
  },
});