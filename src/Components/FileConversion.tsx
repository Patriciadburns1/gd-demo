// import * as React from 'react'
// // import { styled } from '@mui/material/styles'
// // import Paper from '@mui/material/Paper'
// import Grid from '@mui/material/Grid'
// import BasicCard from './BasicCard'

// // const Item = styled(Paper)(({ theme }) => ({
// //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
// //     ...theme.typography.body2,
// //     padding: theme.spacing(1),
// //     textAlign: 'center',
// //     color: theme.palette.text.secondary,
// // }))

// const FileConversion: React.FC = () => {
//     return (
//         <Grid container spacing={3}>
//             <Grid item xs={3}>
//                 <BasicCard
//                     title="Intake"
//                     description="Update NVF File Number"
//                 />
//             </Grid>
//             <Grid item xs={3}>
//                 <BasicCard
//                     title="Search and Request Files"
//                     description="Advance Search, One View , Meta Data, Set Nara Priority"
//                 />
//             </Grid>
//             <Grid item xs={3}>
//                 <BasicCard title="Manage & Analyze Reports" description="" />
//             </Grid>
//             <Grid item xs={4}>
//                 <BasicCard title="Process" description="" />
//             </Grid>
//             <Grid item xs={4}>
//                 <BasicCard title="Rescan" description="" />
//             </Grid>
//             <Grid item xs={4}>
//                 <BasicCard title="Research NARA Data" description="" />
//             </Grid>
//             <Grid item xs={2}>
//                 <BasicCard title="Scan & Upload" description="" />
//             </Grid>
//             <Grid item xs={2}>
//                 <BasicCard title="Manage Exceptions" description="" />
//             </Grid>
//             <Grid item xs={4}>
//                 <BasicCard title="Request & View Reopened Box" description="" />
//             </Grid>
//             <Grid item xs={4}>
//                 <BasicCard title="Ship" description="" />
//             </Grid>
//             <Grid item xs={4}>
//                 <BasicCard title="Manage Files" description="" />
//             </Grid>
//             <Grid item xs={4}>
//                 <BasicCard title="Admin Function" description="" />
//             </Grid>
//         </Grid>
//     )
// }

// export default FileConversion
import * as React from 'react'
import Grid from '@mui/material/Grid'
import BasicCard from './BasicCard'
import { Box } from '@mui/material'

const FileConversion: React.FC = () => {
    return (
        <Box sx={{ height: '100vh', overflowY: 'auto', padding: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicCard
                        title="Intake"
                        description="Update NVF File Number"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicCard
                        title="Search and Request Files"
                        description="Advance Search, One View, Meta Data, Set Nara Priority"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicCard
                        title="Manage & Analyze Reports"
                        description=""
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicCard title="Process" description="" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicCard title="Rescan" description="" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicCard title="Research NARA Data" description="" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicCard title="Scan & Upload" description="" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicCard title="Manage Exceptions" description="" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicCard
                        title="Request & View Reopened Box"
                        description=""
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicCard title="Ship" description="" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicCard title="Manage Files" description="" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicCard title="Admin Function" description="" />
                </Grid>
            </Grid>
        </Box>
    )
}

export default FileConversion
