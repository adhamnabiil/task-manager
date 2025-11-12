import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <div className="shadow-lg">
      <div className="flex justify-between max-w-[1400px] mx-auto">
        <Typography variant="h4" className="text-center p-4">
          Task Manager
        </Typography>
      </div>
    </div>
  );
};
export default Header;
