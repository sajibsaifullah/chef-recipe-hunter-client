import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-ochre.vercel.app/allData")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2 className="text-primary text-center">Hello Chef Recipe Hunter</h2>
      <p>more details coming soon...</p>
    </>
  );
}

export default App;
