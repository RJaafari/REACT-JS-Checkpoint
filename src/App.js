import React from 'react';
import { Container, Navbar, Nav, Card, CardGroup } from 'react-bootstrap'; // Update CardDeck to CardGroup

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          {/* Navbar content */}
        </Navbar>

        <Container className="mt-4">
          <h1>Welcome to React Bootstrap App</h1>

          <CardGroup className="mt-4"> {/* Update CardDeck to CardGroup */}
            {/* Card components */}
          </CardGroup>
        </Container>
      </div>
    </>
  );
}

export default App;

