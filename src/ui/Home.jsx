import CreateUser from "../features/users/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";
function Home() {
  const userName = useSelector((state) => state.user.userName);

  return (
    <div className="px-4 my-10 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold text-stone-700 md:text-3xl ">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName === "" ? (
        <CreateUser />
      ) : (
        <Button to="menu" type="primary">
          Go to Menu
        </Button>
      )}
    </div>
  );
}

export default Home;
