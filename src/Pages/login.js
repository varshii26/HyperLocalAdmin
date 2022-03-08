import { Container, Box, Typography, TextField, CircularProgress, Button } from '@mui/material';
import React, { Component } from 'react';

export class login extends Component {
    render() {
        return <Container maxWidth="xs">
            <Box bgcolor="white" boxShadow="2" borderRadius="12px" textAlign="center" p="24px" mt="50px">
                <Typography color="textSecondary">ADMIN</Typography>
                <TextField
                    label="Email"
                    id="outlined-size-small"
                    defaultValue="Small"
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    margin="normal"
                    size="small"
                />
                <TextField
                    label="Password"
                    id="outlined-size-small"
                    type="password"
                    defaultValue="Small"
                    variant='outlined'
                    color='secondary'

                    fullWidth
                    margin="normal"
                    size="small"
                />

                <br />
                <br />

                <CircularProgress size={24} thickness={4} color="secondary" />
                <br />
                <br />

                <Button disableElevation variant="contained" color="primary" fullWidth>
                    Contained
                </Button>


            </Box>
        </Container>;

    }
}

export default login;