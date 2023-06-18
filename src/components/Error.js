import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h2>OOPS!! something went wrong return back to safe place</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    );
};

export default Error;