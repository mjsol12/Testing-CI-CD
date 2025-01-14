import React from "react";
import useFetchPlanet from "./hooks/useFetcherPlanet";
import { Form } from "react-bootstrap";

function QueryContainer({
  setSearchTerm,
  searchTerm,
  gender,
  homeworld,
  setGender,
  setHomeworld,
}) {
  const { planets, loading: loadingPlanets } = useFetchPlanet();

  return (
    <>
      <div class="d-flex align-items-center mb-3">
        <div class="d-flex align-items-center flex-row" style={{ gap: "10px" }}>
          <span>
            <i className="nc-icon nc-zoom-split" />
          </span>
          <Form.Control
            type="text"
            id="search"
            placeholder="Search characters"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div class="p-2">
          <select
            className="custom-select"
            aria-label="Default select example"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="n/a">N/A</option>
            <option value="none">None</option>
            <option value="hermaphrodite">Hermaphrodite</option>
          </select>
        </div>
        <div class="p-2">
          <select
            className="custom-select"
            aria-label="Default select example"
            value={homeworld}
            onChange={(e) => setHomeworld(e.target.value)}
          >
            <option value="">Select Planet</option>
            {planets.map((planet, index) => (
              <option key={index} value={planet.url}>
                {planet.name}
              </option>
            ))}
            {loadingPlanets && <div>Loading more planets...</div>}
          </select>
        </div>
      </div>
    </>
  );
}

export default QueryContainer;
