import { useState } from "react";

import { Container, Img } from "./styles";

import period1 from "../../assets/periods/period1.png";
import period2 from "../../assets/periods/period2.png";
import period3 from "../../assets/periods/period3.png";
import period4 from "../../assets/periods/period4.png";
import period5 from "../../assets/periods/period5.png";
import period6 from "../../assets/periods/period6.png";
import period7 from "../../assets/periods/period7.png";
import period8 from "../../assets/periods/period8.png";
import period9 from "../../assets/periods/period9.png";
import period10 from "../../assets/periods/period10.png";

export default function PDFViwer() {
  const periodList = [
    period1,
    period2,
    period3,
    period4,
    period5,
    period6,
    period7,
    period8,
    period9,
    period10,
  ];

  return (
    <Container>
      {periodList?.map((image) => {
        return <Img src={image} />;
      })}
    </Container>
  );
}
