import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Linking, View } from "react-native";

function CustomDrawerContent(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView style={{ backgroundColor: "black" }} {...props}>
      <DrawerItem
        label="ChatGPT"
        labelStyle={{ color: "#fff" }}
        onPress={() => navigation.navigate("Home")}
      />
      <View className="h-1 border-b border-gray-500" />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL("https://mywebsite.com/help")}
      />
    </DrawerContentScrollView>
  );
}
export default CustomDrawerContent;
