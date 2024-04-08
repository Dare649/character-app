import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { axiosClient } from "../axios";

const Character = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  // Fetch data by ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/characterInput/" + id);
        setData(response.data);
      } catch (error) {
        console.log(error, "Error fetching data");
      }
    };
    fetchData();
  }, [id]);

  return (
    <section className="screen-2 w-full h-screen bg-black/80">
      <div className="lg:w-[50%] sm:w-full mx-auto sm:h-70 lg:h-[50%] flex flex-col bg-white py-14 px-3">
        <div className="w-20 text-center">
            <Link
                className="font-bold capitalize text-lg outline-none hover:border-2 active:border-2 bg-black rounded-lg text-white w-full hover:bg-transparent hover:text-black hover:border-black active:bg-transparent active:text-black active:border-black h-16 py-3 px-5"
                to="/screen-2"
            >
                back
            </Link>
        </div>
        <div className="mt-10 ">
          <h2 className="text-2xl font-bold capitalize text-center">{data.character}</h2>
        </div>
      </div>
    </section>
  );
};

export default Character;
