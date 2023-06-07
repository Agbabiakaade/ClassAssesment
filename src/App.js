import './App.css';
import UserInput from './component/UserInput';
import UserOutput from './component/UserOutput';


function App(){
  return(
<div className='App'>

<UserInput/>
<UserOutput
paragraph1={'This is the first paragraph of my component'}
/>
<UserOutput
paragraph2={'This is the second paragraph of my component'}
/>

</div>
  );

}
export default App