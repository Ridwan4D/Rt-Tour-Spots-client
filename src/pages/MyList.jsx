import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyList = () => {
    const {user} = useContext(AuthContext)
     useEffect(() => {
    fetch(`http://localhost:5000/allPlace/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div></div>;
};

export default MyList;
