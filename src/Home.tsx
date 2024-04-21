import healthcareLogo from "@/assets/red-cross.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex flex-col items-center ">
        <img
          src={healthcareLogo}
          alt="healthcare logo"
          className="max-h-96 max-w-96 object-cover m-16"
        />
        <Button
          onClick={() => {
            navigate("/introduction");
          }}
          variant="outline"
        >
          Get Started
        </Button>
      </section>
    </>
  );
};

export default Home;
