import React from "react";
import { Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/about">
          <div> about </div>
        </Route>

        <Route path="/contact">
          <div> contact </div>
        </Route>

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route path="/">
                  <div> <h1> home </h1>
                              
                  <div className="alert alert-danger" role="alert">...</div>
          </div>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
