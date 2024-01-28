// Página que utiliza Registro
import Registro from '@/components/Registro';

const App = () => {
  const handleClose = () => {
    console.log("Cerrar");
  };

  const handleRegister = () => {
    console.log("Lógica del registro");
    // Puedes realizar acciones adicionales aquí
  };

  return (
    <div>
      <Registro onClose={handleClose} onRegister={handleRegister} />
      {/* Otro contenido de la aplicación */}
    </div>
  );
};

export default App;
