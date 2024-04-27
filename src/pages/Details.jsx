import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Details = () => {
   const {spotDetail} = useContext(AuthContext)
   console.log(spotDetail);
  return (
    <div>
      <h3 className="text-3xl">{spotDetail.country
}</h3>
    </div>
  );
};

export default Details;
