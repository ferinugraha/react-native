import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import {
  useInput,
  useMessage,
  useRequest,
  useToken,
} from "../../../latte/hooks";
import { useContext, useState } from "react";
import { USER_INIT } from "../conf";
import { BASE_URL } from "../../../latte/conf";
import { AppContext } from "../../../latte/context";

export const UserViewSignIn = ({ navigation }) => {
  const token = useToken();
  const request = useRequest(false);
  const input = useInput();
  const message = useMessage();
  const appContext = useContext(AppContext);

  const [user, setUser] = useState(USER_INIT);

  const onSignIn = () => {
    const url = `${BASE_URL}/user/signin`;
    request.on
      .post(url, user)
      .then(async (response) => {
        // console.log(response.data.token);
        await token.set(response.data.token);
        appContext.setIsAuthenticated(true);
        message.success(response);
        navigation.navigate("Tugas01");
      })
      .catch((error) => {
        message.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Image
          style={styles.icon}
          source={{
            uri: "https://icons.iconarchive.com/icons/graphicloads/flat-finance/128/lock-icon.png",
          }}
        />
        <View style={styles.form}>
          <TextInput
            label="Email"
            keyboardType="email-address"
            value={user.email}
            onChangeText={(value) => input.text("email", value, user, setUser)}
            mode="outlined"
          />
          <TextInput
            label="Password"
            secureTextEntry={true}
            value={user.password}
            onChangeText={(value) =>
              input.text("password", value, user, setUser)
            }
            mode="outlined"
          />
          <Button onPress={onSignIn} mode="contained">
            Sign In
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    gap: 24,
  },
  form: {
    gap: 24,
    marginHorizontal: 56,
  },
  icon: {
    width: 128,
    height: 128,
    alignSelf: "center",
  },
});
