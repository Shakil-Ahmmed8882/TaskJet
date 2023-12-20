import TitleDescription from "../Shared/TitleDescription";
import Quotes from "../Components/Home/Quotes";
import Testimonials from "../Components/Home/Testimonials";

const Home = () => {
  return (
    <div className="">
      <div className="bg-[#ffffff10] h-[600px] w-[600px] filter blur-3xl absolute top-11 left-0 z-10"></div>
      {/* <div className="bg-[#fd8bc80c] h-[600px] w-[600px] filter blur-3xl absolute top-11 right-0 z-10"></div> */}
      <TitleDescription
        title={"Streamline your tasks "}
        description={
          " Our mission is to streamline your tasks, making organization and productivity effortless. Say goodbye to the chaos of scattered to-dos and hello to a seamlessly integrated system designed to simplify your life"
        }
      />
      <div className="mt-11 mb-20">
        <div className="grid lg:grid-cols-2 gap-5">
          <Quotes
            quote={
              "If there are nine rabbits on the ground, if you want to catch one,just focus on one."
            }
            details={
              "When managing a project with various tasks, prioritize and focus on one task at a time. For instance, if your project involves research, dedicate focused time solely to gathering information before moving on to the next task"
            }
            img={
              "https://variety.com/wp-content/uploads/2017/09/jack_ma.png"
            }
            
            by={"– Jack Ma."}
            ></Quotes>
          <Quotes
            quote={
              "The key is not to prioritize what's on your schedule, but to schedule your priorities"
            }
            details={
              "Schedule your priorities rather than merely prioritizing what's on your calendar. Focus on one task at a time. For instance, if your project involves research, dedicate specific, focused time solely to gathering information before moving on"
            }
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WqIZAUFiojyNqtQwRn17UXstPFv0C85WAw&usqp=CAU"
            }
            by={"Stephen Covey"}
            ></Quotes>
        </div>
      </div>

      <Testimonials/>
    </div>
  );
};

export default Home;
