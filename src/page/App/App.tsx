import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PrivacyPolicy} />
        <Route path="privacy_policy" component={PrivacyPolicy} />
      </Switch>
    </Router>
  );
};

export default App;
