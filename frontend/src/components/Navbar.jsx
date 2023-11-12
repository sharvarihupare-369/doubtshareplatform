import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box >
      <Box p="20px" display={"flex"} alignItems={"center"} gap="20px" color="white"  h="70px" background={"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Button> <Link to="/doubtform">Ask a doubt?</Link></Button>
      </Box>
    </Box>
  )
}

export default Navbar