import { Link } from "react-router-dom"
import { setRatingColor } from "../../utils/setRatingColor";
import Availability from "../../components/Availability";


const Card = ({ data }) => {

  const bg_color = setRatingColor(data.rating)

  return (
    <Link to={"/place/" + data.id} className="border border-zinc-400 rounded-lg p-4 flex gap-2 hover:cursor-pointer h-full">
      <div className="flex-1">
        <img className="w-full h-full max-w-96 rounded-md object-cover" src={data.image_url} alt="img" />
      </div>

      <div className="flex-1 relative">
        <div className="absolute right-[-10px] top-[-10px] text-xl">
          <Availability status={data.availability} />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="font-bold text-xl">{data.name}</h1>
            <p className="text-sm font-semibold">{data.location}</p>
            <div className="flex flex-wrap gap-y-1 gap-x-2 my-3">
              {
                data.amenities.slice(0, 3).map((item, i) => (
                  <span className="bg-zinc-100 border rounded-md text-[12px] font-semibold" key={i}>{item}</span>
                ))
              }
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <p className={bg_color + " " + "px-1 rounded-md text-white font-semibold w-fit "}>
                {new Number(data.rating).toFixed(1)}</p>
              <p className="font-bold text-end">${data.price_per_night} /pernight</p>
            </div>
            <div className="text-end text-xs font-semibold text-zinc-500">vergiler ve ücretler dahil </div>
          </div>
        </div>
      </div>

    </Link>
  )
}

export default Card
