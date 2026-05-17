// importing Material Icons :-
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CircleIcon from "@mui/icons-material/Circle";
import { colors } from "../../../UI/color";

function HeaderComponent() {
  return (
      <header className="w-full flex flex-row-reverse justify-between items-center">
        {/* User profile & user name div */}
        <div className="w-full flex flex-row-reverse justify-start items-center gap-5">
          <img
            className="w-10 pointer-events-none"
            src="../public/man.png"
            alt=""
          />
          <h2 className="font-semibold text-right max-w-37.5 text-white">User Name ...</h2>
        </div>
        {/* Notification Icon div */}
        <div className="w-auto relative flex flex-row justify-center">
          <NotificationsNoneIcon sx={{ color: colors.text_main }} />
          <CircleIcon
            sx={{
              color: "red",
              fontSize: "10px",
              padding: "0.5px",
              position: "absolute",
              right: "2px",
              top: "0px",
            }}
          />
        </div>
      </header>
  );
}

export default HeaderComponent;
