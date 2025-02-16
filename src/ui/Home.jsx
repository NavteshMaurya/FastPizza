import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {

  const username = useSelector(state => state.user.username);



  return (
    <div className="mt-10 text-center sm:my-16">
      <h1 className="text-center text-xl mb-4 font-semibold  text-yellow-500">
        The best pizza.
        <br />
        <span className="text-yellow-500">
        Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === ' ' ? <CreateUser></CreateUser> : <Button to='/menu' type="primary">Continue ordering, {username}</Button>}
    </div>
  );
}

export default Home;
