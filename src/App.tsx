import React from "react";
import { RouterProvider } from "./routes/RouterProvider";
import { JobsProvider } from "./contexts/JobsContext";

function App(): React.ReactElement {
  return (
    <JobsProvider>
      <div className="min-h-screen bg-background">
        <RouterProvider />
      </div>
    </JobsProvider>
  );
}

export default App;
