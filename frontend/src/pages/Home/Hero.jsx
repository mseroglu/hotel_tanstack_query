

const Hero = () => {
    return (
        <div className="h-[20vh] md:h-[30vh] grid place-items-center relative bg-hero bg-center bg-cover rounded-3xl p-5 ">
            {/*
            <img className="rounded-3xl h-full w-full absolute z-[-1]" src="bg.jpg" alt="img " />
            */}
            
            <div className="text-white text-center">
                <h1 className="text-2xl font-bold ">MaGeziSen ile konaklama rezervasyonu yap </h1>
                <p className="font-bold mt-5">Dünya çapında 1.340.715 oda seni bekliyor!</p>
            </div>
        </div>
    )
}

export default Hero
