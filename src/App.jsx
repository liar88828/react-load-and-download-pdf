import "./App.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfFile } from "./components/PdfFile";
import { PDFViewer } from "@react-pdf/renderer";
//https://react-pdf.org/advanced#on-the-fly-rendering//
function App() {
  return (
    <div className="App">
      <PDFDownloadLink document={<PdfFile />} fileName="FORM.pdf">
        {({ loading }) =>
          loading ? <button>Loading</button> : <button> Download</button>
        }
      </PDFDownloadLink>


      {/* <PDFDownloadLink document={<PdfFile />} fileName="somename.pdf">
        {({ loading }) => (loading ? "Loading document..." : "Download now!")}
      </PDFDownloadLink> */}

      <PDFViewer style={{height:'30rem'}}>
        <PdfFile />
      </PDFViewer>
    </div>
  );
}

export default App;
