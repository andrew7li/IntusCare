import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import ParticipantFocused from "./components/ParticipantFocused";
import Participants from "./components/Participants";

function App() {
  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Participants />,
    },
    {
      path: "/participant/:id",
      element: <ParticipantFocused />,
    },
  ]);

  return <RouterProvider router={BrowserRouter} />;
}

export default App;
