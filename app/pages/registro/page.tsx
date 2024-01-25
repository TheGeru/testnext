import Registro from '@/components/Registro';

const App = () => {
    const handleClose = () => {
      console.log("Cerrar");
    };
  
    return (
      <div>
        <Registro onClose={handleClose} />
      </div>
    );
  };
  
  export default App;