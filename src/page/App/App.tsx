import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* ここに Route を追加したら ./src/index.ts の app.use にも同じパスを書く */}
        <Route exact path="/" component={Index} />
        <Route path="/privacy_policy" component={PrivacyPolicy} />
      </Switch>
    </Router>
  );
};

export default App;
