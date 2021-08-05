import React, { useState, useEffect } from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import ToolBar from "./ToolBar";
import Footer from "./Footer";
import About from "./AboutMe";
import Experience from "./Experience";
import Education from "./Education";
import Loader from "./assetes/setting.png";
import Skills from "./Skills";
import Certificate from "./Certificate";
import Swipe from "react-easy-swipe";
import { SubTitle } from "./Custom_Component";

const App = () => {
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const steps = [
    "About Me",
    "Experience",
    "Education",
    "Skills",
    "Achievements",
  ];
  const progress = [20, 40, 60, 80, 100];
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter >= 4) return;
    setCounter(counter + 1);
    setStep(counter + 1);
  };

  const decrement = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
    setStep(counter - 1);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setTimeout(() => {
      setIsPopupOpen(false);
    }, 3000);
  }, [isLoading, isPopupOpen]);

  let dynamicComponent;

  switch (step) {
    case 0:
      dynamicComponent = <About />;
      break;
    case 1:
      dynamicComponent = <Experience />;
      break;
    case 2:
      dynamicComponent = <Education />;
      break;
    case 3:
      dynamicComponent = <Skills />;
      break;
    case 4:
      dynamicComponent = <Certificate />;
      break;
    default:
      dynamicComponent = <About />;
      break;
  }

  return (
    <Div>
      {isLoading ? (
        <Loading>
          <img src={Loader} width="64" height="64" alt="loading" />
        </Loading>
      ) : (
        <Div>
          <ToolBar
            increment={increment}
            decrement={decrement}
            steps={steps}
            progess={progress}
            counter={counter}
          />
          <MediaQuery maxWidth={600}>
            <Swipe
              onSwipeLeft={increment}
              onSwipeRight={decrement}
              tolerance={100}
            >
              <Popup isOpen={isPopupOpen}>
                <SubTitle>Swipe To Navigate</SubTitle>
              </Popup>
              {dynamicComponent}
            </Swipe>
          </MediaQuery>
          <MediaQuery minWidth={600}>{dynamicComponent}</MediaQuery>
          <Footer />
        </Div>
      )}
    </Div>
  );
};

const Div = styled.div`
  min-height: 100vh;
  height: auto;
  background: ${({ theme }) => theme.color.background};
`;

const Popup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  padding: 40px 50px 50px;
  z-index: ${({ isOpen }) => (isOpen ? "999" : "-999")};
  background: ${({ theme }) => theme.color.background};
  border: 2px solid ${({ theme }) => theme.color.buttonBackground};
`;

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  animation-name: rotate;
  animation-duration: 3s;
  animation-timing-function: linear;

  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotate(20deg);
    }
    10% {
      transform: translate(-50%, -50%) rotate(60deg);
    }
    20% {
      transform: translate(-50%, -50%) rotate(100deg);
    }
    30% {
      transform: translate(-50%, -50%) rotate(140deg);
    }
    40% {
      transform: translate(-50%, -50%) rotate(180deg);
    }
    50% {
      transform: translate(-50%, -50%) rotate(220deg);
    }
    60% {
      transform: translate(-50%, -50%) rotate(260deg);
    }
    70% {
      transform: translate(-50%, -50%) rotate(300deg);
    }
    80% {
      transform: translate(-50%, -50%) rotate(340deg);
    }
    90% {
      transform: translate(-50%, -50%) rotate(380deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(420deg);
    }
  }
`;

export default App;
