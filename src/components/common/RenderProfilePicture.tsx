import { UserData } from "../../services/authService";

export const renderProfilePicture = (dimentions: number, user: UserData={picture:'', fullName:'Terry Hamlet'}) => {
    if (user.picture) {
      return (
        <img
          src={user.picture}
          alt="Profile"
          width={dimentions}
          height={dimentions}
          className="rounded-full"
        />
      );
    } else {
      const initials = user.fullName!
        .split(" ")
        .map((word) => word[0])
        .join("");
      return (
        <div
          className="rounded-full bg-gray-500 flex items-center justify-center"
          style={{ width: dimentions, height: dimentions, fontSize:dimentions/2 }}
        >
          {initials}
        </div>
      );
    }
  };