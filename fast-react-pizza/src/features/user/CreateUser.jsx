import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";
// import Input from "../../ui/Input";

const styles =
  "mb-4 w-72 px-4 py-2 text-sm duration-300 border rounded-full border-stone-300 tranistion-all placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    console.log(username);
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      {/* <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="px-4 py-2 text-sm duration-300 border rounded-full border-stone-300 tranistion-all placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400"
      /> */}
      {/* Resuing with react component */}
      <input
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        className={styles}
      />

      {username !== "" && (
        <div>
          <Button to="/" type="primary" className="my-2">
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
