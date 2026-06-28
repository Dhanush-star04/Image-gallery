import React from "react";
import imageData from "./imagedata";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">

      <Header />

      <div className="gallery-grid">
        {imageData.map((item) => (
          <ImageCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <Footer />

    </div>
  );
}

export default App;

