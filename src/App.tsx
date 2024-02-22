import { AuthProvider } from "./Admin/context";
import { ToastContainer } from "react-toastify";

import { Navigation } from "./routes";

function App() {
  return (
    <>
      <AuthProvider>
        <Navigation />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
      </AuthProvider>
    </>
  );
}

export default App;
