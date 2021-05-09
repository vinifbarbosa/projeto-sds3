import DataTable from "components/DataTable";
import NavBar from "components/Navbar";
import Footer from 'components/Footer';
function App() {
  return (
    <>
      <NavBar />
      <div className="container"> 
      <DataTable />
        <h1 className="text-primary">Olá mundo</h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
