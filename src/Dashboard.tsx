import React from 'react'
import BasicCard from './Components/BasicCard'
// import { Card, CardData } from "components/Card";
// import { Container } from "components/ContainerStyles";
import './Dashboard.css'

const Dashboard: React.FunctionComponent = () => {
    return (
        <div className="dashboardContainer">
            <div>
                <BasicCard
                    title="File Conversion"
                    link="/file-conversion"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
            </div>
            <div>
                <BasicCard
                    title="Benefit Communications"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
            </div>
        </div>
    )
}

export default Dashboard
