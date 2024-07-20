import * as React from 'react'
import Dashboard from './Dashboard'
import './App.css'
import AppBar from './MenuBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Help from './Help'
import FileConversion from './Components/FileConversion'

const App: React.FC = () => {
    // const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <body>
                <div className="appContainer">
                    <AppBar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/help" element={<Help />} />
                        <Route
                            path="/file-conversion"
                            element={<FileConversion />}
                        />
                    </Routes>
                </div>
            </body>
        </BrowserRouter>
    )
}

export default App
