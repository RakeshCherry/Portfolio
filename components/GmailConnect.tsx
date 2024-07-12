import {Container, FormControl, FormLabel, Heading} from '@chakra-ui/react'

const GmailConnect = () => {
  return (
    <Container id='Connect'>
      <Heading className='heading'>
        Contact
      </Heading>
      <FormControl isRequired>
        <FormLabel>
          Name
        </FormLabel>
      </FormControl>
    </Container>
  )
}

export default GmailConnect