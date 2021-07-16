import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { Cards } from './features/cards/Cards'

library.add(fab, far, fas);



function App() {
  return (
    <div className="App">
      {/* <h1>Flip - card memory game</h1> */}
      <Cards />
    </div>
  );
}

export default App;
