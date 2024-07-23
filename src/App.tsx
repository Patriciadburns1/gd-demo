import * as React from 'react'
import Dashboard from './Dashboard'
import './App.css'
import AppBar from './MenuBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Help from './Help'
import FileConversion from './FileConversionView/FileConversion'
import BenefitCommunication from './Benefit Communication View/BenefitCommunication'
import DynamicBreadcrumbs from './Breadcrumbs'

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <div className="appContainer">
                <AppBar />
                <div> 
                <div>
                    <DynamicBreadcrumbs />
                </div>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/help" element={<Help />} />
                    <Route
                        path="/file-conversion"
                        element={<FileConversion />}
                    />
                    <Route
                        path="/benefit-communications"
                        element={<BenefitCommunication />}
                    />
                </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
