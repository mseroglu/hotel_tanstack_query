import { useQueryClient } from "@tanstack/react-query"

const Error = ({ info, queryKey }) => {
  const queryClient = useQueryClient()
  

    // sorguyu tekrar et
    const retry = () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] })
    }

  return (
    <>
      <div className="mt-10 bg-red-500 text-white rounded-lg text-center p-8 ">
        <p className="mb-5 text-3xl">Üzgünüm beklenmedik bir hata oluştu!</p>
        <p>Hata Kodu: {info.message}</p>
      </div>
      <div className="flex justify-center mt-5">
        <button onClick={retry} className="border hover:bg-zinc-200 px-4 py-1 ">Tekrar Dene</button>
      </div>
    </>
  )
}

export default Error
