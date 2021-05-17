import { useState } from "react";
import { Route, Switch, useHistory } from "react-router";
import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import { getGoogleInfo } from "./api/auth";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    picture: "",
  });
  const history = useHistory();

  const onGoogleOauth = async (response) => {
    const data = await getGoogleInfo(response.tokenObj);
    setUser(data);
    history.push("/");
  };
  return (
    <Switch>
      <Route exact path="/" render={() => <Main user={user} />} />
      <Route
        path="/login"
        render={() => <Login onGoogleOauth={onGoogleOauth} />}
      />
    </Switch>
  );
}

export default App;
