import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-between">
      <Navbar />
      <Footer />
    </div>
  );
};

export default page;
