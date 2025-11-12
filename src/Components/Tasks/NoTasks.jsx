import Typography from "@mui/material/Typography";
import noItems from "../../../public/no-items.svg";

const NoTasks = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <img src={noItems} />
      <Typography>Empty</Typography>
    </div>
  );
};
export default NoTasks;
