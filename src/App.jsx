import "./App.css";
import qrImage from "./assets/qrcode.jpg";


function App() {
  return (
    <div className="table-bg">
      <div className="qr-container">
      <img src={qrImage} alt="QR Code" className="qr-image" />
      </div>
    </div>
  );
}

export default App;
