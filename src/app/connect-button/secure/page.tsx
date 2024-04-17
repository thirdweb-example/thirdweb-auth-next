import { redirect } from "next/navigation";
import { isLoggedIn } from "../actions/auth";


const AuthenticatedPage = async () => {
  // redirect back if user is not logged in
   if(!await isLoggedIn()){
    redirect("/connect-button")
   }

  return (
    <div>
      <h1>Logged In Page</h1>
      <p>You are logged in, so you can see this page!</p>
    </div>
  );
};

export default AuthenticatedPage;
