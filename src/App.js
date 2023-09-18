import './App.css';

const array = ["Prueba"];
function ingresar(){
    array.push(document.getElementById("input").value);
    console.log(document.querySelector("input").value);
    console.log(array);
}

function App() {
  return (
    <div>
      <div>
        <input id="input" placeholder="Ingresar" type="text"/>
        <button onClick={ingresar}>Ingresar</button>
      </div>
      <div>
          {
            array.map((element) =>
              <p key={element}>{element}</p>
            )
          }
      </div>
    </div>
  );
}

export default App;
