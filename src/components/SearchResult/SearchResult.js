import React, { useState } from "react";
import QueryContainer from "./QueryContainer";
import CardCharacter from "./CardCharacter";
import ProfileModal from "./ProfileModal";
import { Container, Row, Col } from "react-bootstrap";
import useFetchFilms from "./hooks/useFetcherFilm";
import useFetchCharacters from "./hooks/useFetcherCharacters";

function SearchResult() {
  const [page, setPage] = useState(1);
  const [results, setResult] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [gender, setGender] = useState("");
  const [homeworld, setHomeworld] = useState("");

  const { films } = useFetchFilms();

  const { loading, hasMore } = useFetchCharacters({
    page,
    setResult,
    setPage,
    searchTerm,
    gender,
    homeworld,
  });

  const [selected, setSelected] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (profile) => {
    setSelected(profile);
    setShow(true);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Container fluid>
        <QueryContainer
          setResults={setResult}
          setGender={setGender}
          gender={gender}
          setHomeworld={setHomeworld}
          homeworld={homeworld}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />

        <Row>
          {results.map((character, index) => (
            <Col lg="2" md="3" sm="6" key={index}>
              <CardCharacter character={character} showModal={handleShow} />
            </Col>
          ))}
        </Row>

        {loading && <p>Loading...</p>}
        {hasMore && !loading && (
          <div class="d-grid gap-2 col-6 mx-auto text-center">
            <button
              onClick={loadMore}
              disabled={loading}
              class="btn btn-primary"
            >
              Load More
            </button>
          </div>
        )}

        {selected && (
          <ProfileModal
            show={show}
            handleClose={handleClose}
            profile={selected}
            films={films}
          />
        )}
      </Container>
    </>
  );
}

export default SearchResult;
