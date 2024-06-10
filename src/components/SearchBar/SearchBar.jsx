import toast, { Toaster } from "react-hot-toast";
// import some from "./FriendList.module.css";

const SearchBar = ({ onSubmit }) => {

  const [searchTerm, setSearchTerm] = useState("");
  const notify = () => toast('Here is your toast.');

  
  return (
    <header>
      <form>
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
