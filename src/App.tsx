import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Counter from "./features/counter/Counter";

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="counter" element={<Counter />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
