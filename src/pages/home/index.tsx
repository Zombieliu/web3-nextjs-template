import {Container} from "../../components/Container";
import Header from "../../components/header";
import {Footer} from "../../components/footer";

const Home = () =>{
    return (
        <div className="bg-black">
            <Header/>

            <Container  className="py-32 text-white" id="test1">
                1111
            </Container>

            <Container className="py-32 text-white" id='test2'>
                2222
            </Container>

            <Container className="py-32 text-white" id='test3'>
                3333
            </Container>

            <Footer/>
        </div>

    )
}

export default Home


