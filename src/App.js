import { useState } from "react";
import fetchPicture from "./api";
import "./app.css";

function App() {
  const [dogImageUrl, setDogImageUrl] = useState("");

  const getPicture = async () => {
    const dog = await fetchPicture();
    setDogImageUrl(dog.data.message);
  };

  return (
    <div className="align">
      <button className="btn" onClick={getPicture}>
        Get Dog
      </button>
      {dogImageUrl !== "" && (
        <img className="dog-image" src={dogImageUrl} alt="dog"></img>
      )}
    </div>
  );
}

export default App;
