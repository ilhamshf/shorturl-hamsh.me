import { useColorModeValue } from '@chakra-ui/react'

import { LayoutAuth } from 'components/Layout/LayoutAuth'
import { AuthSignUp } from 'components/AuthSignUp'
import { MetaHead } from 'components/MetaHead/MetaHead'

function Register() {
  const bgColor = useColorModeValue('gray.50', 'gray.800')

  return (
    <LayoutAuth minH={'100vh'} bg={bgColor}>
      <MetaHead
        title="Daftar Akun | Hamsh.me"
        description="Tertarik mencoba layanan pemendek tautan / URL yang gratis dan sangat mudah digunakan? Mari daftarkan akun baru di Hamsh.me"
      />
      <AuthSignUp />
    </LayoutAuth>
  )
}

export default Register

export { getServerSideProps } from '../../Chakra'
