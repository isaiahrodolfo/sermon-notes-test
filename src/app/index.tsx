/**
 * Copyright (c) 2017-present, Wonday (@wonday.org)
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { Button, Dimensions, StyleSheet, View } from "react-native";
import Pdf from "react-native-pdf";

export default function PDFExample() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pdfRef = React.useRef<any>(null);

  const source = {
    uri: "https://github.com/douglasjunior/react-native-pdf-renderer/raw/refs/heads/main/Sample/A17_FlightPlan.pdf",
    cache: true,
  };

  const handleChangePage = (delta: number) => () => {
    if (pdfRef.current) {
      const newPage = currentPage + delta;
      if (newPage > 0) {
        pdfRef.current.setPage(newPage);
        setCurrentPage(newPage);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Next Page" onPress={handleChangePage(1)} />
      <Button title="Previous Page" onPress={handleChangePage(-1)} />
      <Pdf
        ref={pdfRef}
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
        singlePage={true}
        scrollEnabled={false}
        style={styles.pdf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
