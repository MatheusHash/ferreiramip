import { Box, Flex } from '@chakra-ui/react'
import Topbar from './Topbar'

const bgColor = '#F4F6F8'

function Layout({children}){
    return <Box bg={bgColor} minH='100vh'>
        <Topbar />
        <Flex flexDirection='column' pt={62}>
            {children}
        </Flex>
        Layout padrão: 
    </Box>
}

export default Layout