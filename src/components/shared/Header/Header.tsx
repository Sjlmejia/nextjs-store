"use client"

import {
  Box,
  Flex,
  HStack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'

interface Props {
  src: string
  children: React.ReactNode
}

const Links = [
  { name: 'Home', href: '/' },
  { name: 'Store', href: '/store' },
]

const NavLink = (props:Props) => {
  const { children, src } = props

  return (
    <Link
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={src}>
      {children}
    </Link>
  )
}

export function Header() {

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink src={link.href} key={link.name} >{link.name} </NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>
      </Box>

    </>
  )
}

