import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";
import EditBook from "../components/EditBook";
import useLocalStorage from "../hooks/useLocalStorage";

const AppRouter = () => {
    const [books, setBooks] = useLocalStorage('books', []);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<BookList books={books} setBooks={setBooks} />} />
                        <Route path="/add" element={<AddBook books={books} setBooks={setBooks} />} />
                        <Route path="/edit/:id" element={<EditBook books={books} setBooks={setBooks} />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;