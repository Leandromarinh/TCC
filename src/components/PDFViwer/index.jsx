import { useState } from "react";
import { Document, Page } from "react-pdf";

import { Container, ZoomControls } from "./styles";

export default function PDFViwer({ pdf }) {
  console.log("PDF recebido:", pdf);
  const [numPages, setNumPages] = useState();
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const zoomIn = () => setScale(scale + 0.2);
  const zoomOut = () => setScale(scale > 0.5 ? scale - 0.2 : scale);

  return (
    <Container>
      <ZoomControls>
        <button onClick={zoomOut}>-</button>
        <span>{Math.round(scale * 100)}%</span>
        <button onClick={zoomIn}>+</button>
      </ZoomControls>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => {
            return (
              <Page
                key={page}
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                scale={scale}
              />
            );
          })}
      </Document>
    </Container>
  );
}
