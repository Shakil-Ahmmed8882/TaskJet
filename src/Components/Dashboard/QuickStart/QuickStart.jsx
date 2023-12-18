import TitleDescription from "../../../Shared/TitleDescription";
import GroupAvater from "../GroupAvater/GroupAvater";
import FeaturedNavbar from "./FeatureNavbar";

const QuickStart = () => {
  return (
    <div>
      <div className="flex">
        <GroupAvater />
        <FeaturedNavbar />
      </div>
      <TitleDescription
        title={"Quick start"}
        description={
          "Provide a step-by-step guide on how users can quickly get started with your task manager.Include links to more detailed tutorials or documentation if needed."
        }
      />
    </div>
  );
};

export default QuickStart;
