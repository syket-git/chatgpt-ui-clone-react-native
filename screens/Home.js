import { Icon } from "@rneui/themed";

import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Home = () => {
  const navigation = useNavigation();

  const [text, setText] = useState("");
  return (
    <View className={`flex-1 bg-[#212121] pt-3 `}>
      <StatusBar backgroundColor="#212121" />
      <View className="flex-row px-5 items-center justify-center gap-2">
        <View className="flex-1 flex items-start">
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Icon name="menu" type="ionicon" color="#ffffff" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className="bg-[#495057] rounded-md">
            <Text className="text-white px-[12px] py-[5px]">Get Plus ✨</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1 flex-row justify-end gap-x-5">
          <TouchableOpacity>
            <Icon name="create-outline" type="ionicon" color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="ellipsis-vertical" type="ionicon" color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-1 flex items-center justify-center">
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: "https://freelogopng.com/images/all_img/1681039084chatgpt-icon.png",
          }}
        />
      </View>
      <View className="h-[50px] px-3 flex-row gap-x-2 items-center">
        <View className="flex-1 flex-row items-center pl-4 pr-3 bg-[#495057] rounded-full">
          <TextInput
            value={text}
            onChangeText={(e) => setText(e)}
            placeholderTextColor="white"
            className="flex-1 w-full text-white h-[50px]"
            placeholder="Message"
          />
          {!text && (
            <TouchableOpacity>
              <Icon name="mic" type="ionicon" color="white" />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity className="bg-white p-1 rounded-full">
          {text ? (
            <Icon name="arrow-up-outline" type="ionicon" color="#495057" />
          ) : (
            <Icon name="headset" type="ionicon" color="#495057" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
