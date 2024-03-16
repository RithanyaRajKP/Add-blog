import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "./component/CreateBlog";
import BlogDetails from "./component/BlogDetails";
import NotFoundPage from "./component/NotFoundPage";
function App() {
  return (
    <Router>
         <div className="App">
      <Navbar />
      <div className="content">
        {/* <Home /> */}
        <Switch>
           <Route exact path="/">
           <Home /> 
           </Route>
           <Route path="/create">
           <CreateBlog /> 
           </Route>
           <Route path="/blog/:id">
           <BlogDetails /> 
           </Route>
           <Route path='*'>
            <NotFoundPage />
           </Route>
        </Switch>
      </div>
    </div>
    </Router>
 
  );
}

export default App;
