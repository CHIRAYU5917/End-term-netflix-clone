import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
// import video from "../assets/video.mp4";
export default function Player() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={"https://media.istockphoto.com/id/1250653283/video/rub-al-khali-aka-empty-quarter-desert-arabian-peninsula-flying-over-curve-shaped-sand-dunes.mp4?s=mp4-640x640-is&k=20&c=O7_Y2AOSySjkUl7q7giMclUtUA-LPcnpKk-F8Fy_KUk="} autoPlay loop controls muted />
      </div>
    </Container>
  );
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
