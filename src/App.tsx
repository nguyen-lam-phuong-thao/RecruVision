import React from "react";
import { RouterProvider } from "./routes/RouterProvider";

function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-background">
      <RouterProvider />
    </div>
  );
}

export default App;
