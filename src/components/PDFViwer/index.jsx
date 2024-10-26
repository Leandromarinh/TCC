import { useState } from "react";
// import { Document, Page } from "react-pdf";

import { Container, ZoomControls, Img } from "./styles";

import period1 from "../../assets/periods/period1.png";

export default function PDFViwer() {
  const [numPages, setNumPages] = useState();
  const [scale, setScale] = useState(1.0);

  const pdfFile = "/static/media/Grade-Horaria_2024-2.8c807faab961f8514f52.pdf";

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const periodList = [period1];

  const zoomIn = () => setScale(scale + 0.2);
  const zoomOut = () => setScale(scale > 0.5 ? scale - 0.2 : scale);

  return (
    <Container>
      {/* <ZoomControls>
        <button onClick={zoomOut}>-</button>
        <span>{Math.round(scale * 100)}%</span>
        <button onClick={zoomIn}>+</button>
      </ZoomControls> */}
      {/* <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
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
      </Document> */}
      {/* <div>
        <PDFViewer
          document={{
            url: "/static/media/Grade-Horaria_2024-2.8c807faab961f8514f52.pdf",
          }}
        />
      </div> */}
      {periodList?.map((image) => {
        console.log(image);
        return (
          <>
            <Img src={image} />
          </>
        );
      })}
    </Container>
  );
}
