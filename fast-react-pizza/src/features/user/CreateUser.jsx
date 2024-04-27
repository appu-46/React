import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
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
      <Input
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        className="mb-7 w-72"
      />

      {username !== "" && (
        <div>
          <Button className="my-2">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
