import { Box, Container, Heading, Text, Button, Image, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaArrowRight, FaUsers, FaChartLine, FaBullseye } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={10} py={10}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Movere
          </Heading>
          <Text fontSize="xl">Helping companies build a motivated workforce.</Text>
        </Box>

        <Image src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3RpdmF0ZWQlMjBlbXBsb3llZXN8ZW58MHx8fHwxNzE0NDA1Mzk5fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />

        <VStack spacing={5}>
          <Heading as="h2" size="lg">
            Our Services
          </Heading>
          <Text>At Movere, we deliver executive coaching programs that inspire employees to exceed their potential and drive outstanding results for their organizations.</Text>
        </VStack>

        <HStack spacing={10} justifyContent="center">
          <VStack>
            <Icon as={FaUsers} w={10} h={10} />
            <Text fontWeight="semibold">Team Building</Text>
            <Text textAlign="center">Enhance team dynamics and collaboration.</Text>
          </VStack>
          <VStack>
            <Icon as={FaChartLine} w={10} h={10} />
            <Text fontWeight="semibold">Performance Boost</Text>
            <Text textAlign="center">Programs designed to boost overall performance.</Text>
          </VStack>
          <VStack>
            <Icon as={FaBullseye} w={10} h={10} />
            <Text fontWeight="semibold">Goal Alignment</Text>
            <Text textAlign="center">Align individual goals with organizational objectives.</Text>
          </VStack>
        </HStack>

        <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg">
          Learn More
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
