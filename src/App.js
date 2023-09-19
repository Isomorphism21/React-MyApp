import './App.css';
import { useState } from 'react';

let idDatos = 0;

function App() {
  const [dato, setDato] = useState('');
  const [array, setArray] = useState([]);
  const [editarID, seteditarID] = useState(null);
  const [editarValorInput, seteditarValorInput] = useState('');

  const agregarDato = () => {
    setArray([...array, { id: idDatos++, dato: dato }]);
    setDato('');
  };

  const eliminarDato = (id) => {
    const nuevoArray = array.filter(element => element.id !== id);
    setArray(nuevoArray);
  };

  const editarDato = (id) => {
    seteditarID(id);
    const element = array.find(element => element.id === id);
    seteditarValorInput(element.dato);
  };

  const guardarEdicion = (id) => {
    const nuevoArray = array.map(element => {
      if (element.id === id) {
        return { ...element, dato: editarValorInput };
      }
      return element;
    });
    setArray(nuevoArray);
    seteditarID(null);
  };

  return (
    <main>
      <h1>Actividad Crud React</h1>
      <div>
        <input
          placeholder='Ingresar Dato'
          value={dato}
          onChange={e => setDato(e.target.value)}
        />
        <button onClick={agregarDato}>Agregar</button>
      </div>
      <div>
        {array.map(element => (
          <div className='puestoDatos' key={element.id}>
            {editarID === element.id ? (
              <>
                <input
                  value={editarValorInput}
                  onChange={e => seteditarValorInput(e.target.value)}
                />
                <button onClick={() => guardarEdicion(element.id)}>Guardar</button>
              </>
            ) : (
              <>
                <p>{element.dato}</p>
                <button onClick={() => editarDato(element.id)}>Editar</button>
                <button onClick={() => eliminarDato(element.id)}>Eliminar</button>
              </>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;