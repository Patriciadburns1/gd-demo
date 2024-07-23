import * as React from 'react'
import Grid from '@mui/material/Grid'
import BasicCard from '../SharedComponents/BasicCard'
import { Box, Typography } from '@mui/material'

const BenefitCommunication: React.FC = () => {
    const items = [
        { title: 'Billing & Contracts', description: '', icon: null },
        {
            title: 'Shipping',
            description: '',
            icon: null,
        },
        { title: 'Processing', description: '', icon: null },
        { title: 'Process', description: '', icon: null },
        { title: 'Scanning & Upload', description: '', icon: null },
        { title: 'Tableau', description: '', icon: null },
        { title: 'Quality', description: '', icon: null },
        { title: 'Archive', description: '', icon: null },
    ]
    return (
        <Box sx={{ overflowY: 'auto', padding: 2 }}>
            <Typography
                variant="h5"
                component="div"
                sx={{
                    flexGrow: 1,
                    fontWeight: 600,
                    marginLeft: '16px',
                }}
            >
                Manage & Analyze Reports
            </Typography>
            <Grid container spacing={4}>
                {items.map((card, index) => {
                    return (
                        <Grid
                            key={`${index}-${card.title}`}
                            item
                            xs={12}
                            sm={6}
                            md={3}
                        >
                            <BasicCard
                                title={card.title}
                                description={card.description}
                                link=""
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default BenefitCommunication
