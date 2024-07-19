import { useQuery } from "@tanstack/react-query"
import { getDetail } from "../../api"
import { useParams } from "react-router-dom"
import Loader from "../../components/Loader"
import Error from "../../components/Error"
import Container from "../../components/Container"
import Features from "./Features"
import Rating from "./Rating"
import { MdEventAvailable } from "react-icons/md"
import { CgUnavailable } from "react-icons/cg"
import Availability from "../../components/Availability"
import Price from "./Price"
import Button from "./Button"

const Detail = ({ }) => {
  const { id } = useParams()

  const { isLoading, error, data } = useQuery({
    queryKey: ["place"],
    queryFn: () => getDetail(id),
    retry: 2
  })

  console.log("data ", data)
  return (
    <Container designs="max-w-[800px]">
      <div className="mx-20">
        <Button id={data?.id} />
        {
          isLoading
            ? <Loader />
            : error
              ? <Error info={error} queryKey="place" />
              : (
                <div className="relative flex flex-col gap-4 border p-5 rounded-xl shadow-lg ">
                  <div className="flex gap-1 absolute right-6 top-[0px] ">
                    <Rating point={data.rating} />
                  </div>
                  <h1 className="text-3xl font-bold">{data.name}</h1>
                  <p className="text-lg font-semibold">{data.description}</p>
                  <img src={data.image_url} className="rounded-lg " alt="img" />
                  <Features arr={data.amenities} />

                  <div className="flex justify-between mt-10">
                    <div className="flex gap-1 text-3xl">
                      <Availability status={data.availability} />
                      <p className="text-lg font-bold">{data.availability ? "Müsait" : "Dolu"}</p>
                    </div>
                    <Price data={data.price_per_night} />
                  </div>
                </div>

              )
        }
      </div>
    </Container>
  )
}

export default Detail
