import some from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

// console.log("some :>>", some);

const FriendList = ({ friends }) => {
  return (
    <ul className={some.list}>
      {friends.map((friend) => (
        <li className={some.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
