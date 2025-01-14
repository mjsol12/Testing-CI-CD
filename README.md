# Star Wars Data Explorer

## Overview
The **Star Wars Data Explorer** is a React-based web application that allows users to explore data from the Star Wars universe. It fetches data from the [Star Wars API (SWAPI)](https://swapi.py4e.com/) and presents it in an interactive and user-friendly interface.

---

## Key Features

- **Data Exploration:** Users can browse through various categories such as characters, planets, starships, and more.
- **Search Functionality:** The application provides a search feature to quickly find specific entities within the Star Wars universe.
- **Detailed Information:** Upon selecting an item, users can view detailed information fetched from SWAPI.

---

## Technical Overview

- **Frontend:** Built with React, utilizing components for modularity and reusability.
- **State Management:** Managed using React's built-in state management features.
- **Styling:** Styled using CSS, with a focus on responsive design to ensure usability across various devices.
- **Data Fetching:** Utilizes JavaScript's Fetch API to retrieve data from SWAPI.

---

## Project Structure

The project is organized into several directories, each serving a specific purpose:

- **`src/components/`:** Contains React components responsible for rendering different parts of the UI.
  - **`SearchResult/`:** Includes components related to displaying search results.
    - **`SearchResult.js`:** Handles the logic and presentation of individual search results.
    - **`SearchResult.css`:** Contains styling specific to the search result components.
- **`src/services/`:** Includes modules responsible for making API calls to SWAPI.
- **`src/App.js`:** The main application component that sets up routes and integrates various components.

---

## Installation and Setup

To run this project locally, follow these steps:

### Clone the repository:

```bash
git clone https://github.com/mjsol12/Star-Wars-Data-Explorer.git
cd Star-Wars-Data-Explorer
```

### Install dependencies:

Using Yarn:

```bash
yarn install
```

Or using npm:

```bash
npm install
```

### Start the development server:

Using Yarn:

```bash
yarn start
```

Or using npm:

```bash
npm start
```

The application will be accessible at `http://localhost:3000`.

---

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request with your changes.

---

## License

### Template Source
The template used in this project is **Light Bootstrap Dashboard React** by Creative Tim.

### Template License
Licensed under the **MIT License**.

### Project License
Please check the project's own licensing details if applicable.

---

## Acknowledgments

Special thanks to [SWAPI](https://swapi.dev/) for providing the data and to all contributors who helped make this project possible.
