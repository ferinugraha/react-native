import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import { useGuard, useLoading, useToken } from "./latte/hooks";
import { AppContext } from "./latte/context";
import { AppRouter } from "./src/routers";

export default function App() {
  const { isAuthenticated, setIsAuthenticated } = useGuard();
  const loading = useLoading();

  return (
    <>
      <StatusBar backgroundColor={"transparent"} translucent />
      <AppContext.Provider
        value={{ isAuthenticated, setIsAuthenticated, loading }}
      >
        <AppRouter />
      </AppContext.Provider>
    </>
  );
}
