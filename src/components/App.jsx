import Posts from './posts';
import Header from './Header';
import data from '../mock/data';
import { createServer } from 'miragejs';

function App() {
  let posts = data.posts;
  let resultdata = createServer();

  console.log(resultdata);
  return (
    <>
       <Header/>
       <Posts/>
      
    </>
  );

 
}

export default App;
