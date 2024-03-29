import { Formulario } from "./components/formulario"
import { Header } from "./components/header"
import { ListadoPacientes } from "./components/listadoPacientes"
import { PacientesProvider } from "./context/pacientesProvider"

function App() {


  return (

    <PacientesProvider>
      <div className="container mx-auto mt-10">
        <Header />
        <div className="mt-12 p-3 md:flex">
          <Formulario />
          <ListadoPacientes/>
        </div>
      </div>
    </PacientesProvider>

  )
}

export default App