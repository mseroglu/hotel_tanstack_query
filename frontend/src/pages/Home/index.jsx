import Container from "../../components/Container"
import Filter from "./Filter"
import Hero from "./Hero"
import List from "./List"


const Home = () => {


    return (
        <Container designs="my-5">
            <Hero />
            <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 mt-10 gap-5">
                <Filter  />
                <div className="col-span-3 xl:col-span-4">
                    <List />
                </div>
            </div>
        </Container>

    )
}

export default Home
