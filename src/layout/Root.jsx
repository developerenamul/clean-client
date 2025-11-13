import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoaderWrapper from "../components/LoaderWrapper";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <LoaderWrapper>
        <div className="container mx-auto">
          <Outlet></Outlet>
        </div>
      </LoaderWrapper>
      <Footer></Footer>
    </div>
  );
};

export default Root;
