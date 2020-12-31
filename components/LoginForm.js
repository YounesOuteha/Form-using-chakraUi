import { Input, InputLeftElement, Stack, Icon, InputGroup, Button, FormControl, Divider, FormHelperText } from '@chakra-ui/core'

const LoginForm = () => {
    return (
        <form action="submit">
            {/* This Stack container can have also isinline props to make all element in one line */}
            <Stack spacing={4} >
                <FormControl isRequired>
                    <InputGroup>
                        <InputLeftElement children={<Icon name='email' />} />
                        <Input type="email" placeholder='Email' aria-label='Email'/>
                    </InputGroup>
                </FormControl>
                <FormControl isRequired>
                    <InputGroup>
                        <InputLeftElement children={<Icon name='lock' />} />
                        <Input type="email" placeholder='password' aria-label='password'/>
                    </InputGroup>
                </FormControl>
                <Button type='submit' 
                variant='outline' 
                variantColor='lightblue' 
                boxShadow='sm' 
                _hover={{boxShadow: 'md'}}
                _active={{boxShadow:'lg'}}>Sign Up!</Button>
                <FormHelperText textAlign='center'>
                    we will never share your email!
                    <br/>
                    🤞
                </FormHelperText>
            </Stack>
        </form>
    )
}

export default LoginForm
