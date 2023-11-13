import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import questionImage from "../Assets/girlthink.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getStudentDetail } from "../redux/details/action";
import { addDoubt, getAllDoubts } from "../redux/doubts/action";

const DoubtForm = () => {
  const username = localStorage.getItem("login-name");
  const token = localStorage.getItem("doubt-token");
  const dispatch = useDispatch();
  const { student } = useSelector((store) => store.detailsReducer);
  const { alldoubts,isAdded } = useSelector((store) => store.doubtReducer);
  // console.log(student)
  // console.log(alldoubts)
 
  useEffect(() => {
    dispatch(getStudentDetail(token));
  }, []);

  const [doubt,setDoubt] = useState({
    classGrade : student.classGrade ? student.classGrade : "",
    language : student.language ? student.language : "",
    subject:"",
    question : ""
  })

  const handleChange = (e) => {
    const {name,value} = e.target;
    setDoubt({...doubt,[name] : value});
  }

  const handleAskDoubt = (e) => {
    e.preventDefault();
    dispatch(addDoubt(doubt,token))
    dispatch(getAllDoubts(token))
   
  }

  useEffect(()=>{
    dispatch(getAllDoubts(token))
  },[])

  return (
    <Box display={"flex"} m="15px">
      <Box w="50%" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" p="10px">
        <Heading as="h3" size="lg">
          Ask a doubt...
        </Heading>
        <form onSubmit={handleAskDoubt}>
          <Box mt="10px">
            <FormLabel>Class Grade</FormLabel>
            <Input type="text" focusBorderColor="rgb(189, 189, 189)" value={doubt.classGrade} name="classGrade" onChange={handleChange} />
          </Box>
          <Box mt="10px">
            <FormLabel>Language</FormLabel>
            <Input type="text" focusBorderColor="rgb(189, 189, 189)" value={doubt.language} name="language" onChange={handleChange}  />
          </Box>
          <Box mt="10px">
            <FormLabel>Doubt Subject</FormLabel>
            <Input type="text" focusBorderColor="rgb(189, 189, 189)" value={doubt.subject} name="subject" onChange={handleChange}  />
          </Box>
          <Box mt="10px">
            <FormLabel>Question</FormLabel>
            <Input type="text" focusBorderColor="rgb(189, 189, 189)" value={doubt.question} name="question" onChange={handleChange}  />
          </Box>

          <Box mt="10px">
            <Button
              w="100%"
              type="submit"
              variant="none"
              bg="#364FC2"
              color="white"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>

      <Box
        w="40%"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image src={questionImage} w="100%" />
      </Box>
    </Box>
  );
};

export default DoubtForm;
