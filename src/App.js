import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'


import { Cards } from './features/cards/Cards'
import { Menu } from './features/menu/Menu'

library.add(fab, far, fas);



function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Menu}  />
          <Route exact path="/cards/casual" component={Cards}  />
          <Route exact path="/cards/medium" component={Cards}  />
          <Route exact path="/cards/hard" component={Cards}  />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
