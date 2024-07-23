import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CloudSyncIcon from '@mui/icons-material/CloudSync'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import { Link } from 'react-router-dom'

const MenuBar = () => {
    const [auth, setAuth] = React.useState(true)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked)
    }

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: 'transparent',
                    color: '#747070',
                }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <CloudSyncIcon fontSize="large" />
                    </IconButton>

                    <Box sx={{ flexGrow: 1, float: 'left' }}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                fontWeight: 750,
                                marginLeft: '6px',
                            }}
                        >
                            GDIT
                        </Typography>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            SMTS
                        </Typography>
                    </Box>
                    {auth && (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    Signed in as PBurns
                                </MenuItem>
                            </Menu>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={auth}
                                            onChange={handleChange}
                                            aria-label="login and logout switch"
                                            color="default"
                                        />
                                    }
                                    label={auth ? 'Logout' : 'Login'}
                                />
                            </FormGroup>
                            <Link to="/help">
                                <Typography
                                    aria-label="access help document"
                                    component="span"
                                    sx={{
                                        textDecoration: 'none',
                                        color: '#747070',
                                    }}
                                >
                                    Help
                                </Typography>
                            </Link>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default MenuBar
