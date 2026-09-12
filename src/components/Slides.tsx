import PdfRendererView from "react-native-pdf-renderer";

export default function Slides() {
  return (
    <PdfRendererView
      source="src/assets/LetThem_Guide_Leading_Teams.pdf"
      style={{ flex: 1 }}
    />
  );
}
