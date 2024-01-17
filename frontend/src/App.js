import { Container } from "react-bootstrap";
import { Outlet } from 'react-router-dom';
import Header from "./components/Header";
import Footer from './components/Footer';
//import HomeScreen from './screens/HomeScreen';
const App = () => {
  return (
    <>
      <Header />
      <main className = "py-3">
        <Container>
          <h1>Welcome To Proshop</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}
export default App
