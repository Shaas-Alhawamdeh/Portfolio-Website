import { useState } from "react";
import Home from "./home";
import Login from "../Login";

const Dashboard = () => {
  const [user] = useState(true); 

  return (
    <div>
      {user ? <Home /> : <Login />}
    </div>
  );
};

export default Dashboard;
