import AVATAR from "./../../assets/avatar.png";
import LOGOUT from "./../../assets/logout.png";

export default function AvatarAndLogout() {
  return (
    <div className="avatar-logout hidden h-[4rem] items-center justify-center gap-[2.5rem] mobile:flex">
      <img
        className=" h-full cursor-pointer object-contain"
        src={AVATAR}
        alt="avatar"
      />
      <img
        className=" h-[50%] cursor-pointer object-contain"
        src={LOGOUT}
        alt="logout"
      />
    </div>
  );
}
