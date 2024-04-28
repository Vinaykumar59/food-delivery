import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
  const error = useRouteError();
  console.log("error", error);
  return (
    <div className="error-component">
      <h1>
        {error.status} : {error.statusText}
      </h1>
    </div>
  );
};

export default ErrorElement;
