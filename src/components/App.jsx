import ImageGallery from "./ImageGallery";
import ImageCard from "./ImageCard";
import SearchBar from "./SearchBar";
import Loader from './Loader'
import "./App.css";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
