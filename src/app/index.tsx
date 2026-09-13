import React from "react";
import { Button, Dimensions, StyleSheet, View } from "react-native";
import Pdf from "react-native-pdf";

export default function PDFExample() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pdfAspectRatio, setPdfAspectRatio] = React.useState<number | null>(
    null,
  );

  const pdfRef = React.useRef<any>(null);

  const screenWidth = Dimensions.get("window").width;
  const pdfWidth = screenWidth - 20;

  const pdfHeight = pdfAspectRatio ? pdfWidth / pdfAspectRatio : pdfWidth;

  const source = {
    uri: "https://github.com/ralfstuckert/pdfbox-layout/raw/master/examples/letter.pdf",
    cache: true,
  };

  const handleChangePage = (delta: number) => () => {
    const newPage = currentPage + delta;

    if (newPage > 0) {
      pdfRef.current?.setPage(newPage);
      setCurrentPage(newPage);
    }
  };

  return (
    <View style={styles.screen}>
      <View
        style={{
          width: pdfWidth,
          height: pdfHeight,
        }}
      >
        <Pdf
          ref={pdfRef}
          source={source}
          onLoadComplete={(numberOfPages, filePath, { width, height }) => {
            console.log(`Number of pages: ${numberOfPages}`);
            console.log(`PDF size: ${width} x ${height}`);

            setPdfAspectRatio(width / height);
          }}
          onPageChanged={(page, numberOfPages) => {
            setCurrentPage(page);
          }}
          onError={(error) => {
            console.log(error);
          }}
          onPressLink={(uri) => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={styles.pdf}
        />
      </View>

      <View style={styles.buttons}>
        <Button title="Previous Page" onPress={handleChangePage(-1)} />
        <Button title="Next Page" onPress={handleChangePage(1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    marginTop: 25,
  },

  pdf: {
    flex: 1,
  },

  buttons: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
});
