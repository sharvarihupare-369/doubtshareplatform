import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  HStack,
  Button,
  Text
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getalltutors } from "../redux/details/action";
import { FaTruckMonster } from "react-icons/fa";
import { getAllDoubts } from "../redux/doubts/action";
import Loader from "../components/Loader";
import { getAllUsers } from "../redux/authentication/action";

const Dashboard = () => {
  const username = localStorage.getItem("login-name") || "";
  const token = localStorage.getItem("doubt-token") || "";
  const dispatch = useDispatch();
  const { alltutors, isLoading } = useSelector((store) => store.detailsReducer);
  const { alldoubts } = useSelector((store) => store.doubtReducer);
  const { allusers } = useSelector((store) => store.authReducer);
  // const [name,setName] = useState([])
  // console.log(alltutors)
  // console.log(allusers)
  useEffect(() => {
    dispatch(getalltutors(token));
  }, []);

  useEffect(() => {
    dispatch(getAllDoubts(token));
  }, []);

  // useEffect(()=>{
  //   dispatch(getAllUsers());
    
  // },[])

  // useEffect(()=>{
  //   let tutors =  allusers.filter((el) => el.role === 'Tutor')
  //   setName(tutors);
  // },[allusers])

  // console.log(name)

  // console.log(alldoubts[0].question)

  if (isLoading) {
    return (
      <Box display={"flex"} justifyContent={"center"} mt="100px">
        <Loader />
      </Box>
    );
  }

  return (
    <Box>
      <Heading m="20px" as="h3" size="md">{`Welcome ${username}`}</Heading>

      <Box m="20px" color="rgb(255, 179, 0)">
       <HStack >
       <Heading as="h2" size="md">
          {alldoubts[0]?.question}
        </Heading>
        <Button _hover={"none"} variant={"solid"} bg="green" color="white">Accept</Button>
       </HStack>
      </Box>

      <Box mt="60px" w="90%" m="auto">
        <Text>All Tutors</Text>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Language</Th>
                <Th>subjectExpertise</Th>
                <Th>Class Grade</Th>
              </Tr>
            </Thead>
            <Tbody>
              {alltutors?.map((tutor) => {
                return (
                  <Tr key={tutor._id}>
                    <Td>{tutor.name ? tutor.name : "Name"}</Td>
                    <Td>{tutor.language}</Td>
                    <Td>{tutor.subjectExpertise}</Td>
                    <Td>{tutor.classGrade}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;
