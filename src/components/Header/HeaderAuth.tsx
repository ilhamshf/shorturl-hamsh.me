import { Link, Button, Flex } from '@chakra-ui/react'

import { HiLogout } from 'react-icons/hi'
import Image from 'next/image'

import { useAuthContext } from 'context/Auth'
import { DarkModeSwitch } from '../DarkModeSwitch'

import { handleLogout } from 'libs/supabase'

export function Header() {
  const { isLoading, isLogin } = useAuthContext()

  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      p="4"
      as="header"
      zIndex="3"
      bg="#008DEF"
    >
      
      <Link
        href={'/'}
        name="Beranda"
        _hover={{
          textDecoration: 'none'
        }}
      >
        
        <Image width={82} height={50} src={'/images/header/hamsh.png'} alt="Hamsh.me" />

      </Link>

      <Flex justifyContent="space-between" alignItems="center">
        {!isLoading && isLogin && (
          <Button
            px={6}
            color={'white'}
            bg="red.400"
            _hover={{
              bg: 'red.500'
            }}
            mr="2"
            onClick={handleLogout}
            leftIcon={<HiLogout />}
          >
            Keluar
          </Button>
        )}
        <DarkModeSwitch />
      </Flex>
    </Flex>
  )
}
