import { Link, useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { delPlace } from "../../api";
import { toast } from "react-toastify"

const Button = ({ id }) => {
    const navigate = useNavigate()

    const mutation = useMutation({
        mutationKey: ["delete"],
        mutationFn: () => delPlace(id),
        onSuccess: () => { 
            toast.success("Silme başarılı..")
            navigate("/")
        },
        onError: () => { 
            toast.error("Silme başarısız !!!")
        }
    })


    const classes = "flex gap-2 items-center font-bold border px-2 py-1 rounded-md transition"
    return (
        <div className="flex justify-between text-xl py-2">
            <Link to=".." 
            className={classes + " hover:bg-zinc-200"}><FaArrowAltCircleLeft /> Geri
            </Link>

            <button 
            disabled={mutation.isPending} 
            onClick={mutation.mutate} 
            className={classes + " hover:bg-red-200"}
            >Sil <MdDelete />
            </button>
        </div>
    );
};

export default Button;