import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { axiosClient } from "../axios";


const Screen1 = () => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  //Form validation and management using formik and yup
  const formik = useFormik({
    initialValues: {
      character: ""
    },

    validationSchema: Yup.object({
      character: Yup.string()
      .required("Required.")
      .max(20, "Must be 20 characters or less")
    }),

    onSubmit: async (values) =>{
      try {
        const response = await axiosClient.post("/characterInput", values);
        setPost(response.data);
        alert("Character inputed successfully.")
        setTimeout(() =>{
          navigate("/screen-2")
        })
      } catch (error) {
        alert("Character input failed, try again");
      }
    }
  })


  return (
    <section className='screen-1 w-full h-screen bg-black/80 py-20'>
      <main className="lg:w-[50%] sm:w-full mx-auto sm:h-70 lg:h-[50%] flex flex-col bg-white py-14">
        <form 
          onSubmit={formik.handleSubmit}
          className='w-full h-full py-10'
        >
          <div className="character mb-5 mx-5">
            <input 
              type="text"
              id="character"
              value={formik.values.character}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder='Enter a character'
              className='font-medium text-lg outline-none border-2 border-x-0 border-t-0 p-3 w-full focus:border-black'
            />
            {
              formik.touched.character && formik.errors.character ?  <p className="text-red-500 mt-2 text-sm font-bold">{formik.errors.character}</p>: null
            }
          </div>
          <div className='bg-black border-2 hover:border-black hover:bg-transparent text-white py-3 hover:text-black mx-5'>
            <button type='submit' className='capitalize font-bold w-full border-none outline-none'>submit</button>
          </div>
        </form>
      </main>
    </section>
  )
}

export default Screen1
