import Registro from '@/components/Registro';

const App = () => {
    const handleClose = () => {
      console.log("Cerrar");
    };
  
    return (
      <div>
        <Registro onClose={handleClose} />
        {/* Otro contenido de la aplicación */}
      </div>
    );
  };
  
  export default App;