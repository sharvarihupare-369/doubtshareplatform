import {
  Box,
  Button,
  Checkbox,
  Heading,
  Input,
  Image,
  useStatStyles,
  useEditable,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import signupquesimg from "../Assets/loginvector.jpg";
import { signup } from "../redux/authentication/action";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const { isRegistered, registermsg,errmsg } = useSelector(
    (store) => store.authReducer
  );
  const toast = useToast();
  const navigate = useNavigate();
  const [signupdata, setSignupdata] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  // const handleChange = (e) => {
  //   const { value, name, checked } = e.target;
  //   // console.log("value" + value)
  //   // console.log("name"+ name)
  //   // console.log("checked"+ checked)
  //   // console.log(e)
  //   setSignupdata({ ...signupdata, [name]: value});
  // };

  console.log(signupdata)

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signup(signupdata));
  };

  useEffect(() => {
    if (isRegistered) {
      toast({
        title: "Account created.",
        description: registermsg,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
      return;
    }

    if(errmsg){
      toast({
        title: errmsg,
        // description: registermsg,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  }, [isRegistered,errmsg]);

  return (
    <Box
      display={"flex"}
      background={
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
      }
    >
      <Box
        w="30%"
        h="100vh"
        background={
          "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 69%)"
        }
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex",
          "2xl": "flex",
        }}
        alignItems={"center"}
        justifyContent={"flex-end"}
      >
        <Box
          w="90%"
          h="90vh"
          bg="#37CF89"
          display={"flex"}
          alignItems={"end"}
          justifyContent={"end"}
          borderTopLeftRadius={"20px"}
          borderBottomLeftRadius={"20px"}
        >
          <Box w="100%" >
            <Image
              src={signupquesimg}
              borderRadius={"10px"}
              // borderTopRightRadius={"20px"}
              // borderBottomRightRadius={"20px"}
            />
          </Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        w={{
          base: "100%",
          sm: "100%",
          md: "100%",
          lg: "70%",
          xl: "70%",
          "2xl": "70%",
        }}
        h="100vh"
      >
        <Box w="50%">
          <Heading color="white" textAlign={"left"} as="h3" size="lg">
            Signup to Dashboard
          </Heading>
          <form onSubmit={handleSignup}>
            <Box>
              <Box m="15px auto">
                <Input
                  type="text"
                  name="username"
                  // onChange={handleChange}
                  onChange={(e)=>setSignupdata({...signupdata,username:e.target.value})}
                  value={signupdata.username}
                  placeholder="Enter name"
                  _placeholder={{ opacity: 0.9, color: "gray.900" }}
                  focusBorderColor="rgb(189, 189, 189)"
                  size="md"
                  variant="filled"
                />
              </Box>

              <Box m="15px auto">
                <Input
                  type="email"
                  name="email"
                  // onChange={handleChange}
                  onChange={(e)=>setSignupdata({...signupdata,email:e.target.value})}
                  value={signupdata.email}
                  placeholder="Enter email"
                  _placeholder={{ opacity: 0.9, color: "gray.900" }}
                  focusBorderColor="rgb(189, 189, 189)"
                  size="md"
                  variant="filled"
                />
              </Box>

              <Box m="15px auto">
                <Input
                  type="password"
                  name="password"
                  // onChange={handleChange}
                  onChange={(e)=>setSignupdata({...signupdata,password:e.target.value})}
                  value={signupdata.password}
                  placeholder="Enter password"
                  _placeholder={{ opacity: 0.9, color: "gray.900" }}
                  focusBorderColor="rgb(189, 189, 189)"
                  size="md"
                  variant="filled"
                />
              </Box>

              <Box m="15px auto" textAlign={"left"}>
                <Checkbox
                  mr="20px"
                  colorScheme="green"
                  color="white"
                  fontWeight={600}
                 
                  onChange={()=>setSignupdata({...signupdata,role:"Student"})}
                  // isChecked={signupdata.role === 'Student'}
                >
                  Student
                </Checkbox>

                <Checkbox
                  color="white"
                  fontWeight={600}
                  colorScheme="green"
                  // value={signupdata.role}
                  onChange={()=>setSignupdata({...signupdata,role:"Tutor"})}
                  // isChecked={signupdata.role === 'Tutor'}
                >
                  Tutor
                </Checkbox>
              </Box>

              <Box m="15px auto">
                <Button
                  type="submit"
                  w="100%"
                  variant="none"
                  
                  bg="#364FC2"
                  color="white"
                >
                  Signup
                </Button>
              </Box>
              <Box color="white" display={"flex"} gap="10px">
                <p>Already Registered?</p>
                <Link to="/login">Login Now</Link>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
