import { CgUnavailable } from "react-icons/cg";
import { MdEventAvailable } from "react-icons/md";

const Availability = ({ status }) => {

    return (
        <>
            {
                status
                    ? <MdEventAvailable className=" text-green-500" />
                    : <CgUnavailable className=" text-red-500" />
            }
        </>
    );
};

export default Availability;