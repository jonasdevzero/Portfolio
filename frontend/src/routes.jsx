import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Landing, About, Skills, Portifolio } from './pages';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/about' component={About} />
                <Route path='/skills' component={Skills} />
                <Route path='/portifolio' component={Portifolio} />
            </Switch>
        </Router>
    );
};

export default Routes;
