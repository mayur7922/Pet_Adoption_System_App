import AuthProvider from "../provider/authProvider";
import Routes from "../routes";
import '../styles/App.css'

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
