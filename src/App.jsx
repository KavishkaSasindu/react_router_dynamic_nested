import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import User from "./Pages/User";
import OneUser from "./Pages/OneUser";
import NotFound from "./Pages/NotFound";
import OneBook from "./Pages/bookPages/OneBook";
import BookList from "./Pages/bookPages/BookList";
import NewBook from "./Pages/bookPages/NewBook";
import BookNav from "./components/BookNav";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/allUsers" element={<User />} />
          <Route path="/allUsers/:id" element={<OneUser />} />
          <Route path="/books" element={<BookNav />}>
            <Route index element={<BookList />} />
            <Route path=":id" element={<OneBook />} />
            <Route path="new" element={<NewBook />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
