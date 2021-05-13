import Bmw7 from './images/BMW7.png';
import './App.css';
import Address from "./Components/Address";
import CompanyInfo from "./Components/CompanyInfo";
import PhoneNumber from "./Components/PhoneNumber";

const link = 'https://www.bmwusa.com/vehicles/7-series/sedan/overview.html?cid=GOOGLE_G%7CBMW%7CNAT%7CT1%7C7+Series%7CModel%7CAO%7CAlways+On%7CPhrase&tier=tier1&maco=national&ch=paid_search&veh=NA&ds_rl=1272360&ds_rl=1255066&gclid=Cj0KCQjws-OEBhCkARIsAPhOkIZ685q0RuoRNmueSRLsa7FjNwqsVNyLkWHd2UwNbor622ExOHCOZA8aAsR5EALw_wcB&gclsrc=aw.ds'

function App() {
    let str = 'BMW Dealer'
    return (
        <div className="App">
            <h1>{str}</h1>
            <hr/>
            <h2><Address/></h2>
            <h2>Phone Number: <PhoneNumber/></h2>
            <hr/>
            <h2>Company Information</h2>
            <CompanyInfo/>
            <hr/>
            <button onClick={() => window.location.href = link}><img src={Bmw7} alt='bmw7' className='photo'/></button>
            <div><a href="https://www.bmwusa.com/" >Official site</a></div>
        </div>
    );
}

export default App;