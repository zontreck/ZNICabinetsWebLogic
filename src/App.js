import "./App.css";
import Particles from "react-particles-js";
import { Card } from "react-bootstrap";
import ZDevNotifierCheck from "./ZontreckDevNotificationChecks.js";
import { ToastProvider } from "react-toast-notifications";
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Administrators from "./Administrators";

function App() {
  return (
    <div className="App">
      <ToastProvider PlacementType="top-right">
        <ZDevNotifierCheck />
      </ToastProvider>
      <Particles
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5,
              },
            },
          },
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 60,
          polygon: {
            enable: true,
            type: "inside",
            move: {
              radius: 100,
            },
          },
          autoPlay: true,
          interactivity: {
            detectsOn: "window",
            modes: {
              attract: {
                distance: 200,
                duration: 1,
                speed: 0.5,
              },
              bounce: {
                distance: 200,
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 100,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 1,
                },
              },
              light: {
                area: {
                  gradient: {
                    start: {
                      value: "#FFFFFF",
                    },
                    stop: {
                      value: "#000000",
                    },
                  },
                  radius: 1000,
                },
              },
              trail: {
                delay: 0.005,
                quantity: 5,
                particles: {
                  color: {
                    value: "#FF0000",
                    animation: {
                      enable: true,
                      speed: 400,
                      sync: true,
                    },
                  },
                  move: {
                    outModes: {
                      default: "destroy",
                    },
                    speed: 2,
                  },
                },
              },
            },
          },
          particles: {
            collisions: {
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
              },
              enable: true,
              mode: "standard",
              overlap: {
                enable: true,
                retries: 0,
              },
            },
            destroy: {
              mode: "split",
              split: {
                count: 2,
                rate: {
                  random: {
                    enable: true,
                    minimumValue: 1,
                  },
                  value: {
                    min: 1,
                    max: 10,
                  },
                },
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
                factor: 1000,
              },
              limit: 0,
              value: 125,
            },
            size: {
              random: {
                enable: true,
                minimumValue: 1,
              },
              value: {
                min: 1,
                max: 3,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 1,
                sync: false,
                destroy: "none",
                minimumValue: 1,
                startValue: "random",
              },
            },
            move: {
              angle: {
                offset: 45,
                value: 90,
              },
              decay: 0,
              distance: 0,
              direction: "none",
              drift: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                maxSpeed: 50,
              },
              path: {
                clamp: true,
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                },
                enable: false,
              },
              outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              random: false,
              size: false,
              speed: 2,
              straight: false,
            },
          },
        }}
        style={{
          width: "100vw",
          height: "105vh",
        }}
      />
      <Switch>
        <Route
          path="/:USER/:CALLBACK/Admins"
          exact
          render={(props) => {
            return <Administrators {...props} />;
          }}
        />
        <Route component={Welcome} />
      </Switch>
    </div>
  );
}

export default App;
