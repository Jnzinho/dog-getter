import axios from "axios";

const fetchPicture = async () => {
  return await axios.get("https://dog.ceo/api/breeds/image/random");
};

export default fetchPicture;