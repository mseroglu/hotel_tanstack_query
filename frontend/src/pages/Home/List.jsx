import { useQuery } from "@tanstack/react-query"
import { getPlaces } from "../../api"
import Loader from "../../components/Loader"
import Error from "../../components/Error"
import Card from "./Card"
import { useSearchParams } from "react-router-dom"


const List = () => {
  const [params] = useSearchParams()
  // url deki arama parametrelerini nesne haline getirdik
  const paramsObj = Object.fromEntries(params.entries())

  const { isLoading, error, data } = useQuery({
    queryKey: ["places", paramsObj],
    queryFn: () => getPlaces(paramsObj),
    retry: 2      // sadece iki kere dene
  })

  return (
    <div className="max-lg:mt-10">
      <h1 className="font-bold text-2xl">Yakınınızdaki hedefler</h1>

      <div>

        {isLoading
          ? <Loader />
          : error
            ? <Error info={error} queryKey="places" />
            : (
              <div className="grid grid-cols-2 max-md:grid-cols-1 justify-between gap-5 mt-5">
                {
                  data.places.map((item, i) => (
                    <div key={item.id} className="col-span-1">
                      <Card  data={item} />
                    </div>
                  )
                  )
                }
              </div>
            )}

      </div>

    </div>
  )
}

export default List
