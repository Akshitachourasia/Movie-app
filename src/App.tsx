import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Outlet } from "react-router-dom";
import "./App.scss";
import { useState } from "react";
function App() {
  const [searchQuery, setSearchQuery] = useState(""); // Store the search query

  return (
    <div>
      <Header setSearchQuery={setSearchQuery} />{" "}
      <div className="container">
        <main>
          <Outlet context={{ searchQuery }} />{" "}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
