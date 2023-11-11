import { Box, Button, Checkbox, Heading, Input ,Image, useStatStyles} from '@chakra-ui/react'
import React, { useState } from 'react'
import signupquesimg from '../Assets/curiosity-people-concept-illustration_114360-11034.jpg'

const Signup = () => {

    const [signupdata,setSignupdata] = useState({
        username :  "",
        email : "",
        password : "",
        role : ""
    })

    const handleChange = (e) => {
        const {value,name,checked} = e.target;
        // console.log("value" + value)
        // console.log("name"+ name)
        // console.log("checked"+ checked)
        // console.log(e)

        setSignupdata({...signupdata,[name] : value})

    }

  return (
    <Box display={"flex"}  background={"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"} >

      <Box w="30%" h="100vh"  background= {"linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 69%)"} display={{base:"none",sm:"none",md:"none",lg:"flex",xl:"flex","2xl":"flex"}} alignItems={"center"} justifyContent={"flex-end"}>
          <Box w="80%" h="90vh"  bg="#37CF89" display={"flex"} alignItems={"top"} justifyContent={"end"}  borderTopLeftRadius={"20px"} borderBottomLeftRadius={"20px"} >
              <Box w="80%" position={"relative"} top="30px" left="50px"  >
                <Image src={signupquesimg} borderTopRightRadius={"20px"} borderBottomRightRadius={"20px"} />
              </Box>
          </Box>
       </Box>

       <Box display={"flex"} alignItems={ "center" } justifyContent={"center"} w={{base:"100%",sm:"100%",md:"100%",lg:"70%",xl:"70%","2xl":"70%"}} h="100vh">
            <Box w="50%">
                <Heading color="white" textAlign={"left"} as="h3" size="lg">Signup to Dashboard</Heading>
                <Box > 
                  <Box m="15px auto"> 
                  <Input type="text" name="username" onChange={handleChange} value={signupdata.username} placeholder="Enter name" _placeholder={{ opacity: 0.9, color: 'gray.900' }} focusBorderColor="rgb(189, 189, 189)"  size='md' variant='filled' />
                  </Box>

                  <Box m="15px auto">
                  <Input type="email" name="email" onChange={handleChange} value={signupdata.email} placeholder="Enter email" _placeholder={{ opacity: 0.9, color: 'gray.900' }} focusBorderColor="rgb(189, 189, 189)"  size='md' variant='filled' />
                  </Box>

                  <Box m="15px auto">
                  <Input type="password" name="password" onChange={handleChange} value={signupdata.password} placeholder="Enter password" _placeholder={{ opacity: 0.9, color: 'gray.900' }} focusBorderColor="rgb(189, 189, 189)"   size='md' variant='filled' />
                  </Box>

                  <Box m="15px auto" textAlign={"left"} >
                     <Checkbox mr="20px" colorScheme='green'  color="white" fontWeight={600} defaultChecked value={signupdata.role}>Student</Checkbox>
                     <Checkbox color="white" fontWeight={600 } colorScheme='green' value={signupdata.role}>Tutor</Checkbox>
                  </Box>

                  <Box m="15px auto"> 
                    <Button w="100%" variant={"solid"} bg="#364FC2" color="white">Signup</Button>
                  </Box>
                </Box>


            </Box>
       </Box>
    
    </Box>
  )
}

export default Signup