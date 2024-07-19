
const Features = ({ arr }) => {

    return (
        <div className="flex flex-col gap-4 ">            
            <p className="font-bold text-xl">Popüler jonaklama yeri imkan ve özellikleri</p>
            <div className="grid grid-cols-2 gap-3 ">{
                arr.map((i, k) => <span key={k} className="border bg-zinc-100 py-1 px-2 font-bold">{ i }</span>)
            }</div>
        </div>
    );
};

export default Features;