import { Image, Box, Tab, Tabs, TabList, TabPanel, TabPanels, useColorMode } from '@chakra-ui/core'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

const form = () => {
    const {colorMode} = useColorMode();
    return (
       <Box bg={colorMode === 'light' ? 'gray.200' : 'gray.600'} w='350px' p={3} boxShadow='sm' rounded='lg'>
           <Image src='./security.png' w='80px' mx='auto' mt={12} mb={10}/>
            <Tabs variant='enclosed-colored' isFitted m={4}>
                <TabList>
                    <Tab>Sign Up</Tab>
                    <Tab>Login</Tab>
                </TabList>
                <TabPanels mt={4}>
                    <TabPanel>
                        <SignUpForm/>
                    </TabPanel>
                    <TabPanel>
                        <LoginForm/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
       </Box>
    )
}

export default form
