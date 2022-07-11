import NotificationButton from "./components/NotificationButton"
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"

function App() {
  return (
    /*usa <> </>para poder usar mais de uma tag no react*/
    <>
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
