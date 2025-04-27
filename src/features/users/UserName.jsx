import { useSelector } from "react-redux";

function UserName() {
  const userName = useSelector((state) => state.user.userName);
  if (!userName) {
    return null; // Don't render anything if userName is not available
  }
  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}

export default UserName;
