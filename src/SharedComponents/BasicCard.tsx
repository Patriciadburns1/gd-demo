import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

interface CardProps {
    title: string
    description?: string // optional prop
    onClick?: () => void
    link: string
    icon?: boolean
}

const BasicCard: React.FC<CardProps> = ({ title, description, link }) => {
    return (
        <Card sx={{ minWidth: 275, minHeight: 205, margin: '1em' }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 18, fontWeight: 600 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                {link ? (
                    <Button component={Link} to={link} size="small">
                        <OpenInNewIcon sx={{ color: '#747070' }} />
                    </Button>
                ) : null}
            </CardActions>
        </Card>
    )
}

export default BasicCard
