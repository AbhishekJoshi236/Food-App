import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return (
        <div className="m-4 text-center">
            <h1 className="text-4xl">Oops!</h1>
            <h2>Something Went Wrong!!</h2>
            <h1 className="text-2xl">This site can't be reached</h1>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    );
};

export default Error;