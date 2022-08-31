import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PathparamsV1 = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setProfiles(response.data);
    });
  }, []);
  return (
    <>
      <p>DataList</p>
      {profiles.map((user) => {
        return (
          <div key={user.id}>
            <Link to={`/${user.id}/${user.name}/${user.username}`}>
              <p>name: {user.name}</p>
              <p>username: {user.username}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default PathparamsV1;
