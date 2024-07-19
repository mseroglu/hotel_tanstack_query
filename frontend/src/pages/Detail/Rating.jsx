import { setRatingColor, setTextRating } from "../../utils/setRatingColor";

const Rating = ({ point }) => {    

    const bg_color = setRatingColor(point)

    const textRating = setTextRating(point)

    return (
        <div className="flex gap-2 font-semibold items-center mt-5">
            <span className={bg_color + " " + "text-white px-2 py-1 rounded-md"}>{new Number(point).toFixed(1)}</span>
            <span className="text-lg font-bold">{textRating}</span>
        </div>
    );
};

export default Rating;