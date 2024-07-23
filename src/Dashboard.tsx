import React from 'react'
import BasicCard from './SharedComponents/BasicCard'
import './Dashboard.css'
import { Link } from 'react-router-dom'

const Dashboard: React.FunctionComponent = () => {
    return (
        <div className="dashboardContainer">
            <div>
                <Link to="/file-conversion">
                    <BasicCard
                        title="File Conversion"
                        link="/file-conversion"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                </Link>
            </div>
            <div>
                <Link to="/benefit-communications">
                    <BasicCard
                        title="Benefit Communications"
                        link="/benefit-communications"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                </Link>
            </div>
        </div>
    )
}

export default Dashboard
