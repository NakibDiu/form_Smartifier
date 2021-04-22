import React from 'react';
import {Typography, Container, Box, TextField, FormControl, Button} from '@material-ui/core';
import useStyle from './Style'


const App = () => {
    const classes = useStyle();
    return (
        <>
            <Container position = "relative" className = {classes.container}>
                <Box className = {classes.form}>
                    <Typography variant = "h6" className = {classes.title}>
                        Download the guide by filling out this form
                    </Typography>
                    <div className = {classes.names}>
                        <FormControl className= {classes.first}>
                            <TextField  
                            label="First Name" variant="outlined"
                            className= {classes.first, classes.input} 
                            />
                        </FormControl>
                        <FormControl className= {classes.second}>
                            <TextField  label="Last Name" 
                            variant="outlined"
                            className= {classes.last,classes.input} 
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className = {classes.email}>
                            <TextField 
                            label="Email" 
                            variant="outlined" 
                            className= {classes.input}/>
                        </FormControl>
                        <FormControl></FormControl>
                    </div>
                    
                    <div className = {classes.company}>
                        <FormControl className= {classes.first}>
                        <TextField 
                        label="Company Name" 
                        variant="outlined" 
                        className= {classes.first, classes.input}
                        />
                        </FormControl>
                        <FormControl className= {classes.second}>
                        <TextField 
                        label="Job Title" 
                        variant="outlined" 
                        className= {classes.input}/>
                        </FormControl>
                    </div>
                    <div className = {classes.field}>
                        <FormControl className= {classes.first}>
                        <TextField 
                        label="Field 1" 
                        variant="outlined" 
                        className= {classes.first, classes.input}
                        />
                        </FormControl>
                        <FormControl className= {classes.second}>
                        <TextField 
                        label="Field 2" 
                        variant="outlined" 
                        className= {classes.input}/>
                        </FormControl>
                    </div>
                    <Button variant = "contained" className= {classes.button}>Free Download the Guide</Button>
                </Box>
            </Container>
        </>
        
    )
}

export default App;