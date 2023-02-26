import './App.css'
import { Link } from 'react-router-dom'
import LayoutComponent from './components/Layout'
import { useRef, useState } from 'react'

export default function App() {
  const [file, setFile] = useState(null)
  const fileInputRef = useRef(null)

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  const handleCancelClick = () => {
    setFile(null)
  }

  const handleUploadClick = () => {
    // Upload the file here...
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const pdfData = event.target.result
        console.log(pdfData)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <LayoutComponent>
      <div className="flex flex-1 h-screen flex-col items-center justify-evenly">
        <div className="flex w-1/2 border-1 border-primaryText h-1/2 rounded-md items-center justify-center">
          {!file ? (
            <>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="absolute cursor-pointer opacity-0"
              />
              <button
                onClick={handleButtonClick}
                className="border-1 border-dashed p-3 px-12 rounded-full text-primaryText font-medium border-primaryText "
              >
                Upload Doc
              </button>
            </>
          ) : (
            <>
              <div>
                <p className="text-primaryText">Selected file: {file.name}</p>
                <div className="flex flex-row mt-5">
                  <button
                    onClick={handleUploadClick}
                    className="text-white w-full mr-2 rounded-md text-sm bg-blue-300"
                  >
                    Upload
                  </button>
                  <button
                    onClick={handleCancelClick}
                    className="w-full bg-red-500 py-1 ml-2 text-sm text-white rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* <h1 className="text-2xl text-white">OR</h1> */}

        <div className="flex flex-row items-center justify-center">
          <input
            type="text"
            placeholder="Enter proof here..."
            className="text-gray-300 rounded-md px-4 bg-primaryLight  p-2 ml-2 outline-none"
          />
          {/* <button className="bg-blue-300 px-3 py-2 ml-3 text-white rounded-md">
            Submit
          </button> */}
          <Link
            to={`/profile`}
            className="bg-blue-500 px-5 py-2 ml-3 text-white rounded-md"
          >
            Submit
          </Link>
        </div>
      </div>
    </LayoutComponent>
  )
}

// function App(props) {
//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <Route path='/home'>
//             <Header />
//             <Home />
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }
