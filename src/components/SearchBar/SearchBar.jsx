import { Toaster } from "react-hot-toast";
import { useToasts } from 'react-toast-notifications';
import { useState } from 'react';
// import some from "./FriendList.module.css";

const SearchBar = ({ onSubmit }) => {
  const { addToast } = useToasts();
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm === '') {
      addToast('Please enter a search term', { appearance: 'error' });
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
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
