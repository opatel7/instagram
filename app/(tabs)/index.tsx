import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "./types";
import Entypo from "@expo/vector-icons/Entypo";
import credential from "./credential.json";
import home from "../(tabs)/home";
import { useRouter } from "expo-router";

type LoginScreenProps = BottomTabScreenProps<RootTabParamList, "home">;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validate = (): string => {
    const usernameValid = username.length >= 5;
    const passwordValid =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      );

    if (!usernameValid) return "Username should be at least 5 characters long.";
    if (!passwordValid)
      return "Password should be at least 8 characters with an uppercase, lowercase, number, and special character.";
    return "";
  };

  const handleSignIn = () => {
    const error = validate();
    if (error) return Alert.alert("Invalid Input", error);

    const user = credential.users.find(
      (cred: { username: string; password: string }) =>
        cred.username === username
    );

    if (!user) return Alert.alert("Error", "Username not found.");
    if (user.password !== password)
      return Alert.alert("Error", "Incorrect password.");

    router.push("/home"); // Navigate to "index" instead of "home"
  };

  return (
    <ThemedView style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <Entypo name="instagram" size={50} color="black" />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Log In" onPress={handleSignIn} />
      <ThemedText style={styles.signupText}>
        Don't have an account? Sign Up
      </ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  signupText: {
    marginTop: 20,
    color: "blue",
  },
});

export default LoginScreen;