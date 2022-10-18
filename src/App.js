import Contacts from "./components/contacts/Contacts";
import ThemeProvider from "./context/ThemeProvider";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/header/Header";
import './App.css'
import EditContact from "./components/editContact/EditContact";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import PostPage from "./components/postPage/postPage";


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header/>
        <div style={{ paddingTop: '50px', maxWidth:'1300px', margin:'0 auto'}}>
          <Routes>
            <Route path="" element={<Contacts/>}></Route>
            <Route path="contacts" element={<Contacts />} />
            <Route path="contacts/:id" element={<EditContact />} />
            <Route path="users" element={<Users/>} />
            <Route path="posts" element={<Posts/>} />
            <Route path="posts/:id" element={<PostPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
