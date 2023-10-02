import "./App.css";
import Header from "./components/Header";
import Mycard from "./components/MyCard";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header title="Adopta un perrito"></Header>
            <main>
                <section className="gallery">
                    <Mycard
                        imagen="https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        name="Messi"
                        descripcion="Un perro muy agresivo, solo gente con experiencia."
                        estilo="badge rounded-pill text-bg-success"
                        etiqueta="Pitbull"
                    ></Mycard>
                    <Mycard
                        imagen="https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        name="Elon Musk"
                        descripcion="Muy amigable y lleno de energía."
                        estilo="badge rounded-pill text-bg-primary"
                        etiqueta="Poodle"
                    ></Mycard>
                    <Mycard
                        imagen="https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        name="Trump"
                        descripcion="Extremadamente flojo, duerme todo el día."
                        estilo="badge rounded-pill text-bg-danger"
                        etiqueta="Border Collie"
                    ></Mycard>
                    <Mycard
                        imagen="https://images.pexels.com/photos/3658120/pexels-photo-3658120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        name="Putin"
                        descripcion="Un gran corazón, le gusta destruir todo."
                        estilo="badge rounded-pill text-bg-warning"
                        etiqueta="Labrador"
                    ></Mycard>
                </section>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;
