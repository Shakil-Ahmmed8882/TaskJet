import { Spinner } from "@nextui-org/react";

const LoadingSpinner = () => {
  return (
    <div className="h-screen w-full grid justify-center items-center">
      <Spinner label="Please wait.." color="default" labelColor="foreground" />
    </div>
  );
};

export default LoadingSpinner;
