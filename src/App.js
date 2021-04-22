import './App.css';
import Particles from "react-particles-js";

function App() {
  return (
    <div className="App">
      <Particles
        params={{
          particles: {
            line_linked: {
              shadow:{
                enable: true,
                color: "#3CA9D1",
                blur: 5
              }
            }
          }
        }}
        style={{
          width: '100%'
        }}
      
      />
    </div>
  );
}

export default App;
