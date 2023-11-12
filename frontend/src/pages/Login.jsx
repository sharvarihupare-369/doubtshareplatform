import {
  Box,
  Button,
  Checkbox,
  Heading,
  Input,
  Image,
  useStatStyles,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import signupquesimg from "../Assets/loginvector.jpg";
import { login } from "../redux/authentication/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Login = () => {

  const dispatch = useDispatch();
  const { loggedinname,isAuth,token,errmsg ,isLoading} = useSelector(
    (store) => store.authReducer
  );
  const toast = useToast();
  const navigate = useNavigate();

  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLogindata({ ...logindata, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(logindata));
  };

  useEffect(()=>{
    
    if(token){
      localStorage.setItem("doubt-token",token);
      localStorage.setItem("login-name",loggedinname)
      toast({
        title: `${loggedinname} logged in successfully`,
        // description: registermsg,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      })
      setTimeout(()=>{
        navigate("/")
      },3000)
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
      return
    }

  },[token,errmsg])


  // if(isLoading){
  //   return <Loader/>
  // }



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
            Login to Dashboard
          </Heading>
          <form onSubmit={handleLogin}>
            <Box>
              <Box m="15px auto">
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={logindata.email}
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
                  onChange={handleChange}
                  value={logindata.password}
                  placeholder="Enter password"
                  _placeholder={{ opacity: 0.9, color: "gray.900" }}
                  focusBorderColor="rgb(189, 189, 189)"
                  size="md"
                  variant="filled"
                />
              </Box>

              <Box m="15px auto">
                <Button
                  type="submit"
                  w="100%"
                  variant="none"
                  bg="#364FC2"
                  color="white"
                >
                  Login
                </Button>
              </Box>

              <Box color="white" display={"flex"} gap="10px">
                <p>Not Registered yet ?</p>
                <Link to="/login">Signup</Link>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
