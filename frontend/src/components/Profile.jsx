import {
  Avatar,
  Box,
  Divider,
  HStack,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addTutorDetails, addstudentDetails, getStudentDetail, getTutorDetails, studentDetails } from "../redux/details/action";

const Profile = () => {
  const username = localStorage.getItem("login-name") || "";
  const token = localStorage.getItem("doubt-token") || "";
  const userType = localStorage.getItem("userType") || "";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { student ,tutor,isTutorAdded,isAdded} = useSelector((store) => store.detailsReducer);
  const [classGrade, setClassGrade] = useState("");
  const [language, setLanguage] = useState("");
  const [name,setName] = useState("")
  //   console.log(student);


  const [studentDetails,setStudentDetails] = useState({
    classGrade : "",
    language : "", 
    name : ""
  })

  const [tutorDetails,setTutorDetails] = useState({
     name : '',
     classGrade :'',
     language : '',
     subjectExpertise : ''    
  })

  const handleAddDetails = (e) => {
    e.preventDefault();
    const studentDetailsObj = {
      name,
      classGrade,
      language,
    };
    if(userType === 'Student'){
        dispatch(addstudentDetails(studentDetails, token));
        dispatch(getStudentDetail(token));
    }else{
        dispatch(addTutorDetails(tutorDetails, token));
        dispatch(getTutorDetails(token));
    }
 
    setTimeout(() => {
      onClose();
    }, 1000);
  };

   const handleChange = (e) => {
    const {value,name} = e.target;
    setStudentDetails({...studentDetails,[name] : value});
   }

   const handleTutorsChange = (e) => {
    const {value,name} = e.target;
    setTutorDetails({...tutorDetails,[name] : value});
   }

  useEffect(() => {
    dispatch(getStudentDetail(token));
  }, []);

  useEffect(()=>{
    if(isAdded){
     return   dispatch(getStudentDetail(token))
    }
    if(isTutorAdded){
        return   dispatch(getTutorDetails(token))
    }
  },[isAdded,isTutorAdded])

  
  useEffect(() => {
    dispatch(getTutorDetails(token));
  }, []);

  return (
    <Box m="20px" display={"flex"} gap="40px">
      <Box w="20%" boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">
        <Box p="15px">
          <Text fontSize={"20px"} fontWeight={600} color="gray.500">
            Profile
          </Text>
        </Box>

        <Divider orientation="horizontal" />

        <Box display={"flex"} justifyContent={"center"} p="10px">
          <Avatar name={username} size="2xl" />
        </Box>
      </Box>
      <Box w="70%" boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">
        <Box p="15px">
          <Text fontSize={"20px"} fontWeight={600} color="gray.500">
            Details
          </Text>
        </Box>

        <Divider orientation="horizontal" />

        <Box>
          <HStack justifyContent={"space-between"}>
            {/* <HStack> */}
            <Heading size="md">
              Username: <span style={{ color: "teal" }}>{username}</span>
            </Heading>
            {/* <Heading size="md"  color="teal">{username}</Heading> */}
            {/* </HStack> */}
            <Button mr="10px" mt="10px" onClick={onOpen}>
              Add Details
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <form onSubmit={handleAddDetails}>
                <ModalContent>
                  <ModalHeader>Add your details</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>

                    {
                        userType === 'Student' ? <Box>
                        <FormControl>
                      <Input
                        name = "name"
                        value={studentDetails.name}
                        onChange={handleChange}
                        placeholder="Name"
                      />
                    </FormControl>

                    <FormControl mt={4}>
                      <Input
                      name = "classGrade"
                        value={studentDetails.classGrade}
                        onChange={handleChange}
                        placeholder="class grade"
                      />
                    </FormControl>

                    <FormControl mt={4}>
                      <Input
                        name = "language"
                        value={studentDetails.language}
                        onChange={handleChange}
                        placeholder="language"
                      />
                    </FormControl>
                        </Box> :  <Box>
                        <FormControl>
                      <Input
                      name = "name"
                        value={tutorDetails.name}
                        onChange={handleTutorsChange}
                        placeholder="Name"
                      />
                    </FormControl>

                    <FormControl mt={4}>
                      <Input
                      name = "classGrade"
                        value={tutorDetails.classGrade}
                        onChange={handleTutorsChange}
                        placeholder="class grade"
                      />
                    </FormControl>

                    <FormControl mt={4}>
                      <Input
                      name = "language"
                        value={tutorDetails.language}
                        onChange={handleTutorsChange}
                        placeholder="language"
                      />
                    </FormControl>
                    <FormControl mt={4}>
                      <Input
                      name = "subjectExpertise"
                        value={tutorDetails.subjectExpertise}
                        onChange={handleTutorsChange}
                        placeholder="subjectExpertise"
                      />
                    </FormControl>
                        </Box>
                    }
                  </ModalBody>

                  <ModalFooter>
                    <Button type="submit" colorScheme="blue" mr={3}>
                      Add
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </form>
            </Modal>
          </HStack>
        </Box>
        {student.classGrade ? (
          <Box>
            <HStack>
              <Heading size="md">ClassGrade: </Heading>
              <Heading size="md" color="teal">
                {student.classGrade}
              </Heading>
            </HStack>
          </Box>
        ) : (
          ""
        )}
        {student.language ? (
          <Box mt="10px">
            <HStack>
              <Heading size="md">Language: </Heading>
              <Heading size="md" color="teal">
                {student.language}
              </Heading>
            </HStack>
          </Box>
        ) : (
          ""
        )}

        {tutor.classGrade ? (
          <Box>
            <HStack>
              <Heading size="md">ClassGrade: </Heading>
              <Heading size="md" color="teal">
                {tutor.classGrade}
              </Heading>
            </HStack>
          </Box>
        ) : (
          ""
        )}

        {tutor.language ? (
          <Box>
            <HStack>
              <Heading size="md">Language: </Heading>
              <Heading size="md" color="teal">
                {tutor.language}
              </Heading>
            </HStack>
          </Box>
        ) : (
          ""
        )}

        {tutor.subjectExpertise ? (
          <Box>
            <HStack>
              <Heading size="md">subjectExpertise: </Heading>
              <Heading size="md" color="teal">
                {tutor.subjectExpertise}
              </Heading>
            </HStack>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default Profile;
