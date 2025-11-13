import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoaderWrapper from "../components/LoaderWrapper";
import Loader from "../components/Loader";

const Root = () => {
  const { state } = useNavigate();
  return (
    <div>
      <Navbar></Navbar>
      <LoaderWrapper>
        <div className="container mx-auto">
          {state === "loading" ? <Loader /> : <Outlet></Outlet>}
        </div>
      </LoaderWrapper>
      <Footer></Footer>
    </div>
  );
};

export default Root;
