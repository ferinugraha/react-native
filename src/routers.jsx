import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { WidgetStandardDrawer } from "../latte/widgets";
import { UserViewSignIn } from "./users/views/UserViewSignIn";
import { useContext } from "react";
import { AppContext } from "../latte/context";
import { Tugas01 } from "./tugas/Tugas01";
import { Tugas02 } from "./tugas/Tugas02";
import { Tugas03 } from "./tugas/Tugas03";
import { Tugas04 } from "./tugas/Tugas04";

const Drawer = createDrawerNavigator();

export const AppRouter = () => {
  const appContext = useContext(AppContext);

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerActiveTintColor: "#e91e63",
            drawerItemStyle: { marginVertical: 5 },
          }}
          drawerContent={(props) => <WidgetStandardDrawer {...props} />}
        >
          {appContext.isAuthenticated && (
            <>
              <Drawer.Screen
                name="Tugas01"
                options={{
                  drawerLabel: "Tugas 01",
                  drawerHideStatusBarOnOpen: true,
                  headerShown: false,
                }}
                component={Tugas01}
              />
              <Drawer.Screen
                name="Tugas02"
                options={{
                  drawerLabel: "Tugas 02",
                  drawerHideStatusBarOnOpen: true,
                  headerShown: false,
                }}
                component={Tugas02}
              />
              <Drawer.Screen
                name="Tugas03"
                options={{
                  drawerLabel: "Tugas 03",
                  drawerHideStatusBarOnOpen: true,
                  headerShown: false,
                }}
                component={Tugas03}
              />
              <Drawer.Screen
                name="Tugas04"
                options={{
                  drawerLabel: "Tugas 04",
                  drawerHideStatusBarOnOpen: true,
                  headerShown: false,
                }}
                component={Tugas04}
              />
            </>
          )}

          {!appContext.isAuthenticated && (
            <Drawer.Screen
              name="UserViewSignIn"
              options={{
                drawerLabel: "Sign In",
                drawerHideStatusBarOnOpen: true,
                headerShown: false,
              }}
              component={UserViewSignIn}
            />
          )}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};
