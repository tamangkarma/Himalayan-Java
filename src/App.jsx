import Aos from "aos"
import { useEffect } from "react"
import "aos/dist/aos.css";
import { RouterProvider } from "react-router";
import { router } from "./routes";
const App = () => {

  useEffect(()=>{
    Aos.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });
  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
