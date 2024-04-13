import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomDrawerContent from "./components/CustomDrawerComponent";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Home from "./screens/Home";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
          >
            <Drawer.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
                drawerLabel: "Tech stack mastered",
                // drawerActiveBackgroundColor: "#495057",
                drawerLabelStyle: {
                  color: "#fff",
                },
              }}
            />
            <Drawer.Screen
              name="About"
              component={About}
              options={{
                headerShown: false,
                drawerLabel: "Typescript beats debugging",
                // drawerActiveBackgroundColor: "#495057",
                drawerLabelStyle: {
                  color: "#fff",
                },
              }}
            />
            <Drawer.Screen
              name="Contact"
              component={Contact}
              options={{
                headerShown: false,
                drawerLabel: "Student SSC Computer knowledge",
                // drawerActiveBackgroundColor: "#495057",
                drawerLabelStyle: {
                  color: "#fff",
                },
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
