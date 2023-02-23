import React from "react";
import Layout from "./components/layout/Layout";
import Container from "./components/container/Container";
import Filters from "./components/filter/Filters";
function App() {
  return (
    <div className="app">
    <Layout>
      <Filters />
      <Container />
    </Layout>
    </div>
  );
}

export default App;
