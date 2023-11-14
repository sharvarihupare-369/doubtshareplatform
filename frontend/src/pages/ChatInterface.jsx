import { Avatar, Box, HStack, Heading, Input ,List,Text} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDoubts } from '../redux/doubts/action'

const ChatInterface = () => {
  const token = localStorage.getItem("doubt-token")  || "";
  const username = localStorage.getItem("login-name") || "";
  const dispatch = useDispatch();
  const {alldoubts} = useSelector((store)=>store.doubtReducer);
  

  useEffect(()=>{
    dispatch(getAllDoubts(token))
  },[])


  return (
    <Box display={"flex"}>
        <Box h="90vh"  w="20%"  bg="#abbaab">
            {/* <Box    display={"flex"} alignItems={"center"} gap="20px"> */}

               <Box>

                {
                 alldoubts.map((doubt)=>{
                  return  <Box p="10px" key={doubt?._id } boxShadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">
                      <HStack gap="10px" mt="10px">
                      <Avatar name={username} size="md" src='https://bit.ly/tioluwani-kolawole' />
                     <Text>{doubt.question}</Text>
                      </HStack>
                    </Box>
 
                  })
                }
               </Box>
            {/* </Box> */}
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