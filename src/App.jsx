import "./App.css";
import qrImage from "./assets/qrcode.jpg";


function App() {
  return (
    <div className="table-bg">
      <h1 className="menu-title">MENU</h1>
      <h2 className="sub-title">Scan the QR code to view the menu</h2>
      <div className="qr-container">
      <img src={qrImage} alt="QR Code" className="qr-image" />
      </div>
    </div>
  );
}

export default App;
