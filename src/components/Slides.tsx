import React from "react";
import { Button, Dimensions, StyleSheet, View } from "react-native";
import Pdf from "react-native-pdf";

export default function Slides({
  pages,
  aspectRatio,
}: {
  pages: string[];
  aspectRatio: number;
}) {
  const [currentPage, setCurrentPage] = React.useState(1);

  const pdfRef = React.useRef<any>(null);

  const screenWidth = Dimensions.get("window").width;
  const pdfWidth = screenWidth - 100;
  const pdfHeight = aspectRatio ? pdfWidth / aspectRatio : pdfWidth;

  console.log(pdfWidth, pdfHeight);

  const source = {
    uri: pages[(currentPage - 1) % pages.length],
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
          backgroundColor: "red",
        }}
      >
        <Pdf
          ref={pdfRef}
          source={source}
          onLoadComplete={(numberOfPages, filePath, { width, height }) => {
            console.log(`Number of pages: ${numberOfPages}`);
            console.log(`PDF size: ${width} x ${height}`);
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
    backgroundColor: "transparent",
  },

  buttons: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
});
