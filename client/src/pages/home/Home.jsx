import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const tokenID =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODhmNWE4NTIyMzc5YTZlZTBkZWVmNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjU0OTgxNiwiZXhwIjoxNjM3MTU0NjE2fQ.-2RfSB2_7k0wD4kiQwnYet8CZcP4-nEfR3TOzw2c1w0";
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token: `Bearer ${tokenID}`,
            },
          }
        );
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);
  console.log(lists);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list, i) => (
        <List key={i} list={list} />
      ))}
    </div>
  );
};

export default Home;
