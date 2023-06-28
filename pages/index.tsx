import type { NextPage } from "next";
import { Box, Button, Container, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";
import { FEATURES_IMAGE_URL, HERO_IMAGE_URL } from "../const/addresses";
import FeatureCard from "../components/FeatureCard";
import Link from "next/link";
import Events from "../components/Events";

const Home: NextPage = () => {
  return (
    <Container maxW={"1440px"}>
      <Flex h={"75vh"} px={20} borderRadius={20} >
        <Flex flexDirection={"row"}>
          <Flex flexDirection={"column"} justifyContent={"center"} w={"60%"}>
            <Stack spacing={4}>
              <Heading fontSize={"xl"}>Transfer App</Heading>
              <Heading fontSize={"6xl"}>
                Send tokens to your friends and family with ease.
              </Heading>
              <Text fontSize={"xl"}>
                Select from a selection of tokens to transfer to your friends and family. Write a message to go along with your token transfer. Connect your wallet to get started now!
              </Text>
              <Link href={"/transfer"}>
                <Button w={"80%"}>Make a Transfer</Button>
              </Link>
            </Stack>
          </Flex>
          <Box>
            <MediaRenderer
              src={HERO_IMAGE_URL}
              height="100%"
              width="100%"
            />
          </Box>
        </Flex>
      </Flex>
      <SimpleGrid columns={2} spacing={4} mt={4}>
        <Flex>
          <MediaRenderer
            src={FEATURES_IMAGE_URL}
            height="100%"
            width="80%"
          />
        </Flex>
        <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <Stack spacing={4}>
            <FeatureCard
              step={"01"}
              title={"Select a Token"}
              description={"Select from a list of verified tokens from the drop down to send to your friends and family."}
            />
            <FeatureCard
              step={"02"}
              title={"Who to Send To"}
              description={"Enter the wallet address of the person you want to send the token to. This is non-reversible so make sure you have the right address."}
            />
            <FeatureCard
              step={"03"}
              title={"Write a Message"}
              description={"Write a message to go along with your token transfer. This is optional but it's always nice to send a message to your friends and family."}
            />
          </Stack>
        </Flex>
      </SimpleGrid>
      <Events />
    </Container>
  );
};

export default Home;
