import * as React from 'react'
import Grid from '@mui/material/Grid'
import BasicCard from '../SharedComponents/BasicCard'
import { Box, Typography } from '@mui/material'

const FileConversion: React.FC = () => {
    const items = [
        { title: 'Intake', description: 'Update NVF File Number', icon: null },
        {
            title: 'Search and Request Files',
            description:
                'Advance Search, One View , Meta Data, Set Nara Priority',
            icon: null,
        },
        { title: 'Manage & Analyze Reports', description: '', icon: null },
        { title: 'Process', description: '', icon: null },
        { title: 'Rescan', description: '', icon: null },
        { title: 'Research Nara Data', description: '', icon: null },
        { title: 'Scan & Upload', description: '', icon: null },
        { title: 'Manage Exceptions', description: '', icon: null },
        { title: 'Request & View Reopened Box', description: '', icon: null },
        { title: 'Ship', description: '', icon: null },
        { title: 'Manage Files', description: '', icon: null },
        { title: 'Admin Function', description: '', icon: null },
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
                File Conversion
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

export default FileConversion
