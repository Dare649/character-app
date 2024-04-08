import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosClient } from "../axios";
import { MdDelete } from "react-icons/md";

const Screen2 = () => {
  const [data, setData] = useState([]);

  // Function to generate random color
  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  // Fetching data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/characterInput");
        setData(response.data);
      } catch (error) {
        alert("Failed to fetch data");
        console.log(error, "Failed to fetch data");
      }
    };
    fetchData();
  }, []);

  const contentWithColors = {};
  data.forEach((item) => {
    const borderColor = contentWithColors[item.character]
      ? contentWithColors[item.character]
      : generateRandomColor();
    contentWithColors[item.character] = borderColor;
  });

  const handleDelete = async (id) => {
    try {
      await axiosClient.delete(`/characterInput/${id}`);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error, "Error deleting item");
    }
  };

  return (
    <section className="screen-2 w-full h-screen bg-black/80">
      <main className="w-full bg-white lg:w-[80%] sm:w-full lg:mx-auto h-full p-5">
        <div className="w-20 text-center my-16">
            <Link
                className="font-bold capitalize text-lg outline-none hover:border-2 active:border-2 bg-black rounded-lg text-white w-full hover:bg-transparent hover:text-black hover:border-black active:bg-transparent active:text-black active:border-black h-16 py-3 px-5"
                to="/"
            >
                back
            </Link>
        </div>
        {
            Object.keys(data).length === 0 ? 
            <p className="first-letter:capitalize font-bold text-lg text-center">no data available</p>:
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className={`border-4 border-${contentWithColors[item.character]} w-full h-20 flex flex-row items-center justify-between px-4`}
                        style={{ borderColor: contentWithColors[item.character] }}
                    >
                    <Link to={`/${item.id}`} className="capitalize font-bold text-center my-6">{item.character}</Link>
                        < MdDelete 
                            className="cursor-pointer"
                            onClick={() => handleDelete(item.id)}
                        />
                    </div>
                ))}
            </div>
        }
      </main>
    </section>
  );
};

export default Screen2;
