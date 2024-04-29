import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const BelajarTextInput = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onSignIn = () => {
    fetch("http://192.168.1.2:3000/user/signin", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.logoThumb}>
          <Image style={styles.logo} source={require("../assets/alien.png")} />
          <Image
            style={styles.logo}
            source={require("../assets/logoikan.png")}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.formControl}
            value={user.email}
            onChangeText={(text) =>
              setUser((value) => ({ ...value, email: text }))
            }
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput
            style={styles.formControl}
            secureTextEntry={true}
            value={user.password}
            onChangeText={(text) =>
              setUser((value) => ({ ...value, password: text }))
            }
          />
        </View>
        <View>
          <TouchableOpacity onPress={onSignIn} style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3a0ca3",
  },
  wrapper: {
    justifyContent: "center",
    height: "100%",
    gap: 24,
  },
  button: {
    backgroundColor: "#ff006e",
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginHorizontal: 58,
    borderRadius: 4,
    borderColor: "#fb6f92",
    borderWidth: 1,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
  },
  formGroup: {
    marginHorizontal: 58,
    gap: 8,
  },
  formLabel: {
    fontSize: 16,
    color: "#fff",
  },
  formControl: {
    backgroundColor: "#ffe5ec",
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    color: "#0d1b2a",
    borderColor: "#fb6f92",
    borderWidth: 0.3,
    borderRadius: 4,
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoThumb: {
    justifyContent: "center",
    gap: 16,
    flexDirection: "row",
  },
});

export default BelajarTextInput;
