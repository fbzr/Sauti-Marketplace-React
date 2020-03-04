import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { historyUtils} from "./utils";
import { alertMessage } from "./actions";
import { PrivateRoute } from "./components/PrivateRoute";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";


class App extends React.Component {
  constructor(props) {
    super(props)
    
    historyUtils.listen((location, action) => {
      this.props.clearAlerts()
    })
  }
  render() {

    const { alert } = this.props;
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="col-sm-8 col-sm-offset-2">
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={historyUtils}>
                        <Switch>
                            <PrivateRoute exact path="/" component={HomePage} />
                            <Route path="/login" component={LoginPage} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}




function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertMessage.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
  
