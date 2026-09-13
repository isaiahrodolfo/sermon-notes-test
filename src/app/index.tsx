import { View } from "react-native";
import Slides from "../components/Slides";
import TextEditor from "../components/TextEditor";

const pages = [
  "https://github.com/ralfstuckert/pdfbox-layout/raw/master/examples/linespacing.pdf",
  "https://github.com/ralfstuckert/pdfbox-layout/raw/master/examples/letter.pdf",
  // "https://github.com/ralfstuckert/pdfbox-layout/raw/master/examples/landscape.pdf",
  "https://github.com/ralfstuckert/pdfbox-layout/raw/master/examples/lowleveltext.pdf",
  "https://github.com/ralfstuckert/pdfbox-layout/raw/master/examples/margin.pdf",
];

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Slides pages={pages} aspectRatio={297 / 210} />
      <TextEditor />
    </View>
  );
}
