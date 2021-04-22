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
          },
          polygon: {
            enable: true,
            type: 'inside',
            move:{
              radius: 100
            }
          },
          autoPlay: true,
          interactivity: {
            detectsOn: "window",
            events:{
              onClick: {
                enable:true
              }
            }
          },
          particles:{
            collisions:{
              bounce:{
                horizontal:{
                  random:{
                    enable: false,
                    minimumValue: 0.1
                  },
                  value:1
                },
                vertical:{
                  random:{
                    enable:false,
                    minimumValue:0.1
                  },
                  value:1
                }
              },
              enable:true,
              mode: "destroy",
              overlap:{
                enable:true,
                retries:0
              }
            },
            destroy:{
              mode:'split',
              split:{
                count: 2,
                rate:{
                  random:{
                    enable:true,
                    minimumValue:1
                  },
                  value:{
                    min: 1,
                    max:10
                  }
                }
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
