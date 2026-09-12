import PdfRendererView from "react-native-pdf-renderer";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Slides() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PdfRendererView
        style={{ flex: 1 }}
        source={require("../assets/LetThem_Guide_Leading_Teams.pdf")}
        distanceBetweenPages={16}
        maxZoom={5}
      />
    </SafeAreaView>
  );
}
