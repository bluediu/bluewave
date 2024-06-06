/* Components */
import { ToastContainer } from "react-toastify";

/* Context */
import { AuthProvider } from "./Admin/context";
import { AuthTableProvider } from "./Client/context";

/* Routes */
import { Navigation } from "./routes";

function App() {
  return (
    <>
      <AuthProvider>
        <AuthTableProvider>
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
        </AuthTableProvider>
      </AuthProvider>
    </>
  );
}

export default App;
