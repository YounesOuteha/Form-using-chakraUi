import {Box, Image, Badge, Text, Stack, Icon, Button, useColorMode} from '@chakra-ui/core'

const Card = () => {
    const { colorMode} = useColorMode();
    const bgColor ={light:'gray.200', dark:'gray.700'};
    const textColor ={light:'gray.500', dark:'gray.100'};
    return (
        <Box w='400px' rounded='20px' overflow='hidden' boxShadow='sm' bg={bgColor[colorMode]}>
            <Image src='../public/thumb.png' alt='Course Cover' />
            <Box p={5}>
                <Stack isInline align='baseline'>
                <Badge variant='solid' variantColor='teal' rounded='full' px={2}>New!</Badge>
                <Badge variant='solid' variantColor='teal' rounded='full' px={2}>React</Badge>
                <Text textTransform='uppercase' fontSize='sm' color='gray.500' letterSpacing='wide'>2 Hours &bull; 10 lectures</Text>
                </Stack>
                <Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>Introduction  to Cahrka UI</Text>
                <Text isTruncated>
                React (also known as React.js or ReactJS) is <br/> an open-source, front end, JavaScript <br/>library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing. React Router is an example of such a library.
                </Text>
                <Stack isInline justify='space-between' color={textColor[colorMode]}>
                    <Text fontWeight='semibold' fontSize='lg'>$20</Text>
                    <Box d='flex'>
                        <Box as='span'>
                            {Array(4).fill('').map((_, i)=>{
                                <Icon  name='star' color='teal.500' key={i}/>
                            })}
                            <Icon name='star' mr='2'/>
                        </Box>
                        <Text as='h3' mr='2' fontSize='lg' fontWeight='semibold'>
                            34 Reviews
                        </Text>
                    </Box>
                </Stack>
                <Box textAlign='center'>
                <Button variantColor='teal' size='lg' mt={3} boxShadow='sm' _hover={{boxShadow:'md'}} _active={{boxShadow:'lg'}}> Sign Up</Button>
                </Box>
                
            </Box>
        </Box>
    )
}

export default Card
