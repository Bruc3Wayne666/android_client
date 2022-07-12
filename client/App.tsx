import React, { FC } from "react";
import { Provider } from "react-redux";
import { setupStore } from "./src/store/store";
import { MainContainer } from "./src/screens/MainContainer";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";


// const ScreenA: FC<any> = ({ navigation }) => {
//   return (
//     <View>
//       <Text style={{ fontSize: 56, color: "red" }}>Hello</Text>
//       <Button onPress={() => navigation.navigate("ScreenB")} title={"On B"} />
//     </View>
//   );
// };


LogBox.ignoreLogs([
  "exported from 'deprecated-react-native-prop-types'.",
])


const store = setupStore();

const App: FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainContainer />
      </NavigationContainer>
    </Provider>
  );
};


export default App;
