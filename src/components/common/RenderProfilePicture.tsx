export const renderProfilePicture = (dimentions: number, user={picture:'', name:'Terry Hamlet'}) => {
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
      const initials = user.name
        .split(" ")
        .map((word) => word[0])
        .join("");
      return (
        <div
          className="rounded-full bg-gray-500 flex items-center justify-center"
          style={{ width: dimentions, height: dimentions }}
        >
          {initials}
        </div>
      );
    }
  };