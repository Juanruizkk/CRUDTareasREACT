import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import FormularioTarea from './components/FormularioTarea'
function App() {
  return (
    <>
      <main>
        <h1 className='text-center m-4'>Lista de Tareas</h1>
        <FormularioTarea></FormularioTarea>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
