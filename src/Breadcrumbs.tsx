import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const DynamicBreadcrumbs: React.FC = () => {
    const location = useLocation()

    const pathnames = location.pathname.split('/').filter((x) => x)

    return (
        <Box sx={{ padding: '1rem' }}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    to="/"
                    style={{ textDecoration: 'none', color: '#747070' }}
                >
                    Home
                </Link>
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`

                    return last ? (
                        <Typography color="textPrimary" key={to}>
                            {value}
                        </Typography>
                    ) : (
                        <Link to={to} key={to}>
                            {value}
                        </Link>
                    )
                })}
            </Breadcrumbs>
        </Box>
    )
}

export default DynamicBreadcrumbs
