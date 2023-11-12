import { Avatar, Box, Heading, Input ,Text} from '@chakra-ui/react'
import React from 'react'

const ChatInterface = () => {
  return (
    <Box display={"flex"}>
        <Box h="90vh"  w="20%"  bg="#abbaab">
            <Box p="10px"  boxShadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" display={"flex"} alignItems={"center"} gap="20px">
              <Box>
                <Avatar name='Kola Tioluwani' size="md" src='https://bit.ly/tioluwani-kolawole' />
              </Box>
              <Box>
                <Heading as="h4" size="sm">Name</Heading>
                <Text>zdasdasd...</Text>
              </Box>
            </Box>
        </Box>

        <Box w="70%">
           <Box h="75vh" w="100%" m="15px 50px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" >

           </Box>
           <Box display={"flex"} w="100%" ml="50px">
              <Input type='text'   placeholder='Send a doubt'  focusBorderColor="rgb(189, 189, 189)" />
           </Box>
        </Box>
    </Box>
  )
}

export default ChatInterface;