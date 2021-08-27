import { useColorModeValue } from '@chakra-ui/react'

import { LayoutAuth } from 'components/Layout/LayoutAuth'
import { AuthForgetPassword } from 'components/AuthForgetPassword'
import { MetaHead } from 'components/MetaHead/MetaHead'

function ForgetPasswordPage() {
  const bgColor = useColorModeValue('gray.50', 'gray.800')

  return (
    <LayoutAuth minH={'100vh'} bg={bgColor}>
      <MetaHead
        title="Lupa Password | Hamsh.me"
        description="Apakah Anda lupa dengan password untuk masuk ke Hamsh.me? Tenang, masih bisa di reset dengan mudah. Tidak sampai 1 menit selesai."
      />
      <AuthForgetPassword />
    </LayoutAuth>
  )
}

export default ForgetPasswordPage

export { getServerSideProps } from '../../Chakra'
