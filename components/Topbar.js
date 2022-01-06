import { Box, Flex, Button } from "@chakra-ui/react"

function Topbar(){
    const bgColor       = '#FFF'
    const color         = '#1A202C'
    const borderColor   = '#DDD'

    return <Flex w='full' position='fixed' zIndex={99999} bgColor={bgColor} color={color} borderBottom={`1px solid ${borderColor}`}>
        <Flex alignItems='center' justifyContent='space-between' w='full' maxW='1200px' margin='0 auto' h='60px' pt={4} pb={4} px={[4, 8]} >
            <Box>
                Ferreira
            </Box>
            <Box>
                <Button color='#7928CA' as='a' cursor='pointer' _hover={{color: 'tomato'}}>
                    Login
                </Button>
            </Box>
        </Flex>
        
    </Flex>
}

export default Topbar