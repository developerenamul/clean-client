import { useNavigation } from "react-router";

const LoaderWrapper = ({ children }) => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-primary w-16 h-16"></span>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoaderWrapper;
