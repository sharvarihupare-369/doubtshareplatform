import { Box, Button, HStack } from "@chakra-ui/react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/authentication/action";

const Navbar = () => {
  const token = localStorage.getItem('doubt-token') || '';
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('doubt-token')
    localStorage.removeItem('login-name')
    localStorage.removeItem('userType')
    window.location.reload()
  }
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      background={
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
      }
    >
      <Box
        p="20px"
        display={"flex"}
        alignItems={"center"}
        gap="20px"
        color="white"
        h="70px"
      >
        <Link to="/chat">Chat</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Button _hover={"none"} variant="link" color="white">
          {" "}
          <Link to="/doubtform">Ask a doubt?</Link>
        </Button>
      </Box>
      <Box color="black" m="0px 20px" display={"flex"} alignItems={"center"} gap="10px">
        <HStack fontWeight={600}>
          <FaUserCircle style={{ fontSize: "20px" }} />
          <Link to="/profile">Profile</Link>
        </HStack>
         { 
           token ?  <Button onClick={handleLogout}>Logout</Button> : ""
         }
      </Box>
    </Box>
  );
};

export default Navbar;
