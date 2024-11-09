import Bannercard from "../../components/BannerCard/Bannercard";
import Navbar from "../../components/navbar/Navbar";
import Categorycard from "../../components/Categorycard/Categorycard";
import Footer from "../../components/footer/Footer";
import SignupModal from "../../components/signupmodal/SignupModal";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Bannercard />
      <SignupModal />
      <Categorycard />
      <Footer />
    </>
  );
};

export default Homepage;
