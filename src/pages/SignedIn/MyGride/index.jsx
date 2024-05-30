import React from "react";

import { Screen, Container } from "./styles";

import LeftBar from "../../../components/LeftBar";

export default function MyGrid(){
    return(
        <Screen>
            <LeftBar myGrid />
            <Container>
                
            </Container>
        </Screen>
    );
}