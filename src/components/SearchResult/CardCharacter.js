import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { getCharacterImage } from "./utils/index";

const CardCharacter = ({ character, showModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="shadow-sm border-0"
      style={{
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        boxShadow: isHovered ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "none",
      }}
    >
      <Card.Img
        variant="top"
        alt={character.name}
        src={getCharacterImage(character.url)}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "137px",
          padding: "12px 12px 8px 12px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <i className={"nc-icon nc-circle-09"} style={{ fontSize: "13px" }} />
          <p
            className="text-monospace text-uppercase fw-lighter text-secondary m-0"
            style={{ fontSize: "11px", letterSpacing: "1px" }}
          >
            character
          </p>
        </div>
        <h5
          className="text-monospace m-0"
          style={{ fontWeight: 600, fontSize: "19px" }}
        >
          {character.name}
        </h5>

        <button
          type="button"
          class="btn btn-outline-info btn-sm"
          onClick={() => showModal(character)}
        >
          Profile
        </button>
      </Card.Body>
    </Card>
  );
};

export default CardCharacter;
