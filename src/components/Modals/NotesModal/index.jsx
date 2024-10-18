import React, { useState } from "react";

import { useDispatch } from "react-redux";

import UserActions from "../../../store/ducks/user";

import {
  Container,
  TopContainer,
  BottomContainer,
  BoldText,
  Text,
  Input,
  ButtonImg,
  Image,
} from "./styles";

import Close from "../../../assets/close.svg";

export default function NotesModal({ setNotesModal, subject }) {
  const dispatch = useDispatch();

  const [notes, setNotes] = useState(subject.nota);

  const handleClick = () => {
    setNotesModal(false);
    const subjectUpdated = {
      ...subject,
      nota: notes,
    };
    dispatch(
      UserActions.updateSubjectRequest(
        subject.periodo,
        subject._id,
        subjectUpdated
      )
    );
  };
  return (
    <Container>
      <TopContainer>
        <ButtonImg onClick={handleClick}>
          <Image src={Close} />
        </ButtonImg>
        <BoldText code>{subject.codigo}</BoldText>
        <BoldText> {subject.nome}</BoldText>
      </TopContainer>
      <BottomContainer>
        <Text>
          Insira aqui informações úteis sobre a discplina como email do
          professor, data de provas, trabalhos e listas, links do classroom,
          moodle ou AVA e etc.
        </Text>
        <Input value={notes} onChange={(e) => setNotes(e.target.value)} />
      </BottomContainer>
    </Container>
  );
}
