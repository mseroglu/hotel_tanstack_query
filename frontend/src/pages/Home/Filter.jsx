import { useSearchParams } from "react-router-dom";

const Filter = () => {
    const [params, setParamps] = useSearchParams()

    const handleChange = (name, value) => {
        params.set(name, value)
        setParamps(params)
    }
    return (
        <form className="flex flex-col gap-8">

            <div className="flex flex-col gap-1">
                <label className="font-bold" htmlFor="">Nereye ?</label>
                <select
                    onChange={(e) => handleChange("location", e.target.value)}
                    name=""
                    className="border py-1 px-4 rounded-md max-w-60" >
                    <option value="">Seçiniz</option>
                    <option value="ankara">Ankara</option>
                    <option value="İstanbul">İstanbul</option>
                    <option value="İzmir">İzmir</option>
                    <option value="antalya">Antalya</option>
                    <option value="rize">Rize</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label className="font-bold" htmlFor="">Konaklama yeri ara
                </label>
                <input onChange={(e) => handleChange("title", e.target.value)}
                    type="text" name="" placeholder="ör: Seaside Villa"
                    className="border py-1 px-4 rounded-md max-w-60" />
            </div>

            <div className="flex flex-col gap-1">
                <label className="font-bold" htmlFor="">Sıralama</label>
                <select 
                onChange={(e) => handleChange("order", e.target.value)}
                name="" className="border py-1 px-4 rounded-md max-w-60" >
                    <option value="">Seçiniz</option>
                    <option value="price-asc">Ucuzdan Pahalıya</option>
                    <option value="price-desc">Pahalıdan Ucuza</option>
                    <option value="rating-asc">Önce Düşük Yıldızlı</option>
                    <option value="rating-desc">Önce Yüksek Yıldızlı</option>
                </select>
            </div>
            <button 
            // type reset olunca form zahmetsizce temizlenir
            type="reset"
            // parametreleri sıfırlayınca çubuktaki filtreler kalkar
            onClick={()=> setParamps({})}
            className="bg-blue-500 max-w-60 text-white px-2 py-1 font-semibold rounded-md">Filtreleri Temizle</button>
        </form>
    );
};

export default Filter;