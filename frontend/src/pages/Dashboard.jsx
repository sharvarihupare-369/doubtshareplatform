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
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getalltutors } from "../redux/details/action";
import { FaTruckMonster } from "react-icons/fa";
import { getAllDoubts } from "../redux/doubts/action";

const Dashboard = () => {
  const username = localStorage.getItem("login-name");
  const token = localStorage.getItem("doubt-token");
  const dispatch = useDispatch();
  const { alltutors } = useSelector((store) => store.detailsReducer);
  const {alldoubts} = useSelector((store)=>store.doubtReducer);
  // console.log(alltutors)

  useEffect(() => {
    dispatch(getalltutors(token));
  }, []);

  

  useEffect(()=>{
    dispatch(getAllDoubts(token))
  },[])

  // console.log(alldoubts[0].question)


  return (
    <Box >
      <Heading  m="20px" as="h3" size="md">{`Welcome ${username}`}</Heading>

      <Box m="20px" color="rgb(255, 179, 0)" >
         <Heading as="h2" size="md" >{alldoubts[0]?.question}</Heading>
      </Box>

      <Box mt="60px">
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
                  <Tr>
                    <Td>Name</Td>
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
