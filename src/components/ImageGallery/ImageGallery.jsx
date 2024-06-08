import some from "./Profile.module.css";

// console.log("some :>>", some);

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={some.container}>
      <div className={some.wrapper}>
        <img
          className={some.person}
          src={image}
          alt="User avatar"
          width={"270"}
          height={"270"}
        />
        <p className={some.text}>{name}</p>
        <p className={some.tag}>@{tag}</p>
        <p className={some.location}>{location}</p>
      </div>
      <ul className={some.stats}>
        <li className={some.item}>
          <span className={some.point}>Followers</span>
          <span className={some.numbers}>{followers}</span>
        </li>
        <li className={some.item}>
          <span className={some.point}>Views</span>
          <span className={some.numbers}>{views}</span>
        </li>
        <li className={some.item}>
          <span className={some.point}>Likes</span>
          <span className={some.numbers}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
