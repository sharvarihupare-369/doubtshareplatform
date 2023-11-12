import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Dashboard = () => {
  const username = localStorage.getItem("login-name");

  return (
    <Box>
       <Heading as="h3" size="lg">{`Welcome ${username}`}</Heading>
    </Box>
  )
}

export default Dashboard