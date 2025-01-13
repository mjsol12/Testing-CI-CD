const extractCharacterId = (url) => {
  const idMatch = url.match(/\/people\/(\d+)\//);
  return idMatch ? idMatch[1] : null;
};

const getCharacterImage = (url) => {
  const id = extractCharacterId(url);
  return id
    ? `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    : "https://starwars-visualguide.com/assets/img/placeholder.jpg";
};

const handleFilmInvolvment = ({ films, profile }) => {
  const involvements = [];

  films?.forEach((val) => {
    if (val.characters.includes(profile.url)) {
      involvements.push(val.title);
    }
  });

  return involvements;
};

export { getCharacterImage, handleFilmInvolvment, extractCharacterId };
