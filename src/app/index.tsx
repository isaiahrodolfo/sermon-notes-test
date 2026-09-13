import { View } from "react-native";
import Slides from "../components/Slides";
import TextEditor from "../components/TextEditor";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Slides />
      <TextEditor />
    </View>
  );
}
