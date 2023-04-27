import { BsCloudSun, BsMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
const MoodTheme = () => {
  const [status, setStatus] = useState(false);
  const changeMood = () => {
    document.querySelector("#__next")?.classList.toggle("theme_light");
    setStatus(!status);
  };
  return (
    <label className="color_switch" onClick={() => changeMood()}>
      {status ? <BsCloudSun /> : <BsMoonStarsFill />}
    </label>
  );
};
export default MoodTheme;
