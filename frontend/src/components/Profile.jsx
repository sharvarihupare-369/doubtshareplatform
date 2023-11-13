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
import { getStudentDetail, studentDetails } from "../redux/details/action";

const Profile = () => {
  const username = localStorage.getItem("login-name");
  const token = localStorage.getItem("doubt-token");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { student } = useSelector((store) => store.detailsReducer);
  const [classGrade, setClassGrade] = useState("");
  const [language, setLanguage] = useState("");
  console.log(student);

  const handleAddDetails = (e) => {
    e.preventDefault();
    const studentDetailsObj = {
      classGrade,
      language,
    };
    dispatch(studentDetails(studentDetailsObj, token));
    setClassGrade("");
    setLanguage("");
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  useEffect(() => {
    dispatch(getStudentDetail(token));
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
                    <FormControl>
                      <Input
                        value={classGrade}
                        onChange={(e) => setClassGrade(e.target.value)}
                        placeholder="class grade"
                      />
                    </FormControl>

                    <FormControl mt={4}>
                      <Input
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        placeholder="language"
                      />
                    </FormControl>
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
      </Box>
    </Box>
  );
};

export default Profile;
