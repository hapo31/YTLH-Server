import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import style from "styled-jsx";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* ここに Route を追加したら ./src/index.ts の app.use にも同じパスを書く */}
        <Route exact path="/" component={Index} />
        <Route path="/privacy_policy" component={PrivacyPolicy} />
      </Switch>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");
        body {
          font-family: "Noto Sans JP", sans-serif;
        }
      `}</style>
    </Router>
  );
};

export default App;
