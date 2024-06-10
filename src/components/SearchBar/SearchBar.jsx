// import { Toaster } from "react-hot-toast";
// import { useToasts } from 'react';
import toast from "react-hot-toast";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  console.log("Привет, мир!");

  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm === "") {
      toast.error("Please, enter a search term");
    } else {
      onSubmit(searchTerm);
    }
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
