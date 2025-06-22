import Heading from "../ui/Heading";
import SignUpForm from "../../src/features/authentication/SignupForm";

function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignUpForm />
    </>
  );
}

export default NewUsers;
