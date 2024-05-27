import React, {useState} from "react";

import { Container, Screen, TextBold, 
         TextContainer, Text, LineContainer,
         GradeImg} from "./styles";

import LeftBar from "../../../components/LeftBar";

import Period1 from './assets/Period1.png';
import Period2 from './assets/Period2.png';
import Period3 from './assets/Period3.png';
import Period4 from './assets/Period4.png';
import Period5 from './assets/Period5.png';
import Period6 from './assets/Period6.png';
import Period7 from './assets/Period7.png';
import Period8 from './assets/Period8-9-10.png';
import Eletiva1 from './assets/EletivaManha.png';
import Eletiva2 from './assets/EletivasTarde.png'



export default function Home(){
    const [editMode, setEditoMode] = useState(false);
    const [currentPeriod, setCurrentPeriod] = useState('2024.1');
    const [beginPeriod, setBeginPeriod] = useState('18/03/2024');
    const [endPeriod, setEndPeriod] = useState('20/07/2024');
    const [beginLock, setBeginLock] = useState('10/04/2024');
    const [endLock, setEndLock] = useState('20/04/2024');
    const [beginChange, setBeginChange] = useState('10/04/2024');
    const [endChange, setEndChange] = useState('20/04/2024');

    const [img1, setImg1] = useState(Period1);
    const [img2, setImg2] = useState(Period2);
    const [img3, setImg3] = useState(Period3);
    const [img4, setImg4] = useState(Period4);
    const [img5, setImg5] = useState(Period5);
    const [img6, setImg6] = useState(Period6);
    const [img7, setImg7] = useState(Period7);
    const [img8, setImg8] = useState(Period8);
    const [img9, setImg9] = useState(Eletiva1);
    const [img10, setImg10] = useState(Eletiva2);
    
    return(
        <Screen>
            <LeftBar home />
            {editMode ? 
                <>
                </>: 
                <Container>
                    <LineContainer>
                        <TextContainer>
                            <TextBold>Período Atual:</TextBold>
                            <Text>{currentPeriod}</Text>
                        </TextContainer>
                    </LineContainer>
                    <LineContainer>
                        <TextContainer>
                            <TextBold>Inicío do Período:</TextBold>
                            <Text>{beginPeriod}</Text>
                        </TextContainer>
                        <TextContainer >
                            <TextBold >Fim do Período:</TextBold>
                            <Text>{endPeriod}</Text>
                        </TextContainer>
                    </LineContainer>
                    <LineContainer>
                        <TextContainer bottom>
                            <TextBold>Período de Trancamento de Disciplina:</TextBold>
                        <Text>{beginLock + " à " + endLock}</Text>
                        </TextContainer>
                        <TextContainer  bottom>
                            <TextBold >Período de Alteração de Disciplina:</TextBold>
                            <Text>{beginChange + " à " + endChange}</Text>
                        </TextContainer>
                    </LineContainer>
                    <LineContainer>
                        <TextContainer bottom>
                            <TextBold>Grade Horária</TextBold>
                        </TextContainer>
                    </LineContainer>
                    <GradeImg src={img1}/>
                    <GradeImg src={img2}/>
                    <GradeImg src={img3}/>
                    <GradeImg src={img4}/>
                    <GradeImg src={img5}/>
                    <GradeImg src={img6}/>
                    <GradeImg src={img7}/>
                    <GradeImg src={img8}/>
                    <GradeImg src={img9}/>
                    <GradeImg src={img10}/>
                </Container>
            }
        </Screen>
    )
}