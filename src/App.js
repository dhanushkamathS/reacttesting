import React ,{useState ,useContext} from 'react';
import { BrowserRouter, Route, Switch,Link } from "react-router-dom";
import { UserContext } from './UserContext';
const Home =() =>{
  const {value ,setValue} = useContext(UserContext)
  return(
    <div>
      home page
      <Link to="/course">course page</Link>
      <button onClick={()=>setValue('value changed')}>clickme</button>
      <div>

      {value}
      </div>
    </div>
  )
}

const Course = () => {

  const {value ,setValue} = useContext(UserContext)
  return(
    <div>
      course page
      {value}
    </div>
  )
}
function App() {
  const [value,setValue] = useState('default')
return (
  <div className="App">
      <BrowserRouter>
<UserContext.Provider value={{value,setValue}}>
<Route exact path="/" component={Home}/>
<Route exact path="/course" component={Course}/>
</UserContext.Provider>
</BrowserRouter>
    </div>
  );
}

export default App;
