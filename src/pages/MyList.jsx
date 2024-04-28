import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSpots(data);
      });
  }, [user]);

  const handleDeleteSpot = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myList/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            // remove deleted item
            const remainingSpot = spots.filter((spot) => spot._id !== _id);
            setSpots(remainingSpot);
          });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>No.</th>
              <th>Spot Name</th>
              <th>Country</th>
              <th>Cost</th>
              <th>Trave Time</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {spots.map((spot, idx) => (
              <tr key={idx} className="hover">
                <th className="text-lg">{idx + 1}</th>
                <td className="text-lg">{spot.spot}</td>
                <td className="text-lg">{spot.country}</td>
                <td className="text-lg">{spot.cost}</td>
                <td className="text-lg">{spot.travelTime}</td>
                <td className="text-lg">
                  <Link to={`/updateSpots/${spot._id}`} className="btn text-lg my-anchor-elements">
                    <MdEdit />
                  </Link>
                </td>
                <td className="">
                  <button
                    onClick={() => handleDeleteSpot(spot._id)}
                    className="btn text-lg text-red-600 my-anchor-element"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Tooltip anchorSelect=".my-anchor-element" place="right">
        Delete
      </Tooltip>
        <Tooltip anchorSelect=".my-anchor-elements" place="right">
        Edit
      </Tooltip>
      </div>
    </div>
  );
};

export default MyList;
