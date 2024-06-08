import React from "react";

import {
  Screen,
  Container,
  LineContainer,
  LinkContainer,
  Text,
  LinkText,
} from "./styles";

import LeftBar from "../../../components/LeftBar";

export default function Link() {
  return (
    <Screen>
      <LeftBar link />
      <Container>
        <LineContainer>
          <LinkContainer>
            <Text>E-mail da coordenação:</Text>
            <LinkText href="mailto:coordenacao.del@poli.ufrj.br">
              coordenacao.del@poli.ufrj.br
            </LinkText>
          </LinkContainer>
          <LinkContainer>
            <Text>E-mail do coordenador:</Text>
            <LinkText href="mailto:coordenador.eletronica@poli.ufrj.br">
              coordenador.eletronica@poli.ufrj.br
            </LinkText>
          </LinkContainer>
        </LineContainer>
        <LineContainer>
          <LinkContainer>
            <Text>E-mail da secretaria:</Text>
            <LinkText href="mailto:secretaria.eletronica@poli.ufrj.br">
              secretaria.eletronica@poli.ufrj.br
            </LinkText>
          </LinkContainer>
          <LinkContainer>
            <Text>E-mail da comissão de estágio:</Text>
            <LinkText href="mailto:comissaoestagio.eletronica@poli.ufrj.br">
              comissaoestagio.eletronica@poli.ufrj.br
            </LinkText>
          </LinkContainer>
        </LineContainer>
        <LinkContainer margin>
          <Text>Site sobre estágio:</Text>
          <LinkText
            href="http://www.pads.ufrj.br/~fbaruqui/Estagio_Supervisionado.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://www.pads.ufrj.br/~fbaruqui/Estagio_Supervisionado.htm
          </LinkText>
        </LinkContainer>
        <LinkContainer margin>
          <Text>Site do Portal da UFRJ:</Text>
          <LinkText
            href="https://portal.ufrj.br/Portal/acesso?cid=3244"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portal UFRJ
          </LinkText>
        </LinkContainer>
        <LinkContainer margin>
          <Text>Drive do Gecom:</Text>
          <LinkText
            href="https://drive.google.com/drive/folders/0B5_FfV8hoRhhcmRlOFk4Zng5Wmc?resourcekey=0-tW5TWzHoQ086CO7IUDlFKg&usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Drive
          </LinkText>
        </LinkContainer>
        <LinkContainer margin>
          <Text>Grupo do Whatsapp:</Text>
          <LinkText
            href="https://chat.whatsapp.com/DGLAO0ShyEv8Nf0huNZ5KT"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eletrogrupo 1971.1
          </LinkText>
        </LinkContainer>
      </Container>
    </Screen>
  );
}
