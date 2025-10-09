// import { Navigate } from "react-router-dom";
// import { useAuth } from "../../../context";

// export default function PrivateRoute({ children }) {
//   const { user } = useAuth();
//   // const {user} = useContext(MyContext);
//   if (user && user.id) {
//     return children;
//   }
//   return <Navigate to="/login"></Navigate>;
// }
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();

  const storedUser = localStorage.getItem("loggedInUser");
  const parsedUser = storedUser ? JSON.parse(storedUser) : null;

  if ((user && user.email) || (parsedUser && parsedUser.email)) {
    return children;
  }

  return <Navigate to="/login" />;
}
