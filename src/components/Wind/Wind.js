import React from "react";

const Wind = (deg) => {
  if (deg === 0) {
    return "N Tramontana";
  } else {
    if (deg > 0 && deg <= 22.5) {
      return "NNE Bora";
    } else {
      if (deg > 22.5 && deg <= 45) {
        return "NE Grecale";
      } else {
        if (deg > 45 && deg <= 67.5) {
          return "ENE Slave";
        } else {
          if (deg > 67.5 && deg <= 90) {
            return "E Levant";
          } else {
            if (deg > 90 && deg <= 112.5) {
              return "ESE Solano";
            } else {
              if (deg > 112.5 && deg <= 135) {
                return "SE Sirocco";
              } else {
                if (deg > 135 && deg <= 157.5) {
                  return "SSE Africo";
                } else {
                  if (deg > 157.5 && deg <= 180) {
                    return "S Ostro";
                  } else {
                    if (deg > 180 && deg <= 202.5) {
                      return "SSW Gauro";
                    } else {
                      if (deg > 202.5 && deg <= 225) {
                        return "SW Libeccio";
                      } else {
                        if (deg > 225 && deg <= 247.5) {
                          return "WSW Ethesia";
                        } else {
                          if (deg > 247.5 && deg <= 270) {
                            return "W Ponente";
                          } else {
                            if (deg > 270 && deg <= 292.5) {
                              return "WNW Traversone";
                            } else {
                              if (deg > 292.5 && deg <= 315) {
                                return "NW Mistral";
                              } else {
                                if (deg > 315 && deg <= 337.5) {
                                  return "NNW Zephyr";
                                } else {
                                  if (deg > 337.5 && deg <= 360) {
                                    return "N Tramontana";
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export default Wind;
