import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { getCharacterImage, handleFilmInvolvment } from "./utils/index";

function ProfileModal({ show, handleClose, profile, films }) {
  const [filmInvolvement, setFilmInvolvement] = useState([]);

  useEffect(() => {
    if (profile && films && films.length > 0) {
      const involvements = handleFilmInvolvment({
        films: films,
        profile: profile,
      });

      setFilmInvolvement(involvements);
    }
  }, [films, profile]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <img
            height={200}
            className="rounded mx-auto d-block"
            src={profile.url && getCharacterImage(profile.url)}
          />
          <div>
            <h5
              className="text-monospace m-0"
              style={{ fontWeight: 600, fontSize: "19px" }}
            >
              {profile.name}
            </h5>

            <ul className="list-group list-group-flush">
              <li
                className="list-group-item"
                style={{ padding: "5px 12px", fontSize: "13px" }}
              >
                Height: {profile?.height}
              </li>
              <li
                className="list-group-item"
                style={{ padding: "5px 12px", fontSize: "13px" }}
              >
                Weight: {profile?.mass}
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-auto mx-auto">
          <p className="m-0 pt-2 pb-2 font-weight-bold">Appeared Films</p>

          <ul className="list-group ">
            {filmInvolvement.map((val) => (
              <li
                className="list-group-item"
                style={{ padding: "5px 12px", fontSize: "13px" }}
              >
                {val}
              </li>
            ))}
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={handleClose}
          type="button"
          class="btn btn-outline-info btn-sm"
        >
          CLOSE
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProfileModal;
