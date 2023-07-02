import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../auth/AuthContext";
import VITE_BACKEND_URL from "../../config";

function UserCheck({ inverse, children }) {
  const { token } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);

  const config = {
    method: "get",
    url: `${VITE_BACKEND_URL}/scope-example/protecteduser`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios(config)
      .then((response) => {
        console.log("Enviaste un token válido");
        console.log(response);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.log("Enviaste un token inválido");
        console.log(error);
        setLoggedIn(false);
      });
  }, []);

  if (inverse) {
    return loggedIn ? null : children;
  } else {
    return loggedIn ? children : null;
  }
}

export default UserCheck;



