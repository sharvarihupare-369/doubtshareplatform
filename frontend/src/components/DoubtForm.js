import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Image,
} from "@chakra-ui/react";
import React from "react";
import questionImage from "../Assets/girlthink.jpg";

const DoubtForm = () => {
  return (
    <Box display={"flex"} m="15px">
      <Box w="50%" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" p="10px">
        <Heading as="h3" size="lg">
          Ask a doubt...
        </Heading>
        <form>
          <Box mt="10px">
            <FormLabel>Class Grade</FormLabel>
            <Input type="text" focusBorderColor="rgb(189, 189, 189)" />
          </Box>
          <Box mt="10px">
            <FormLabel>Language</FormLabel>
            <Input type="text" focusBorderColor="rgb(189, 189, 189)" />
          </Box>
          <Box mt="10px">
            <FormLabel>Doubt Subject</FormLabel>
            <Input type="text" focusBorderColor="rgb(189, 189, 189)" />
          </Box>
          <Box mt="10px">
            <FormLabel>Question</FormLabel>
            <Input type="text" focusBorderColor="rgb(189, 189, 189)" />
          </Box>
          <Box mt="10px">
            <FormLabel>Extra details about question</FormLabel>
            <Textarea focusBorderColor="rgb(189, 189, 189)" />
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
