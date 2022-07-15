import NotificationButton from "./components/NotificationButton"
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    /*usa <> </>para poder usar mais de uma tag no react*/
    <>
    <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
          <SalesCard />
          </div>
        
        </section>
      
      </main>

    </>
  )
}

export default App;
