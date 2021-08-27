import {
  Box,
  Container,
  Flex,
  Stack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue
} from '@chakra-ui/react'

import {
  // login,
  tentang,
  blog,
  ketentuanLayanan,
  kebijakanPrivasi,
  splitbeeAnalytics
} from 'constants/paths'
export interface IFooterProps {
  withBacklink: boolean
}

export function Footer({ withBacklink }: IFooterProps) {
  const boxColor = useColorModeValue('gray.700', 'gray.200')

  return (
    <Box color={boxColor} as="footer" width="100%">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="5" y="0" fill="rgba(0, 141, 239, 0.18)" />
          <use xlinkHref="#gentle-wave" x="20" y="3" fill="rgba(0, 141, 239, 0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0, 141, 239, 0.4)" />
          <use xlinkHref="#gentle-wave" x="90" y="30" fill="rgba(0, 141, 239, 0.7)" />
        </g>
      </svg>

      {withBacklink ? (
        <Box width="100%">
          <Container maxW={'5xl'}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} py={4}>
              <Stack align={'flex-start'}>
                <Text fontWeight="700" color="#008DEF" fontSize={'lg'} mb={2}>
                  Lebih banyak
                </Text>
                <Link href={tentang}>Tentang Hamsh.me</Link>
                <Link href={blog}>Blog</Link>
                <Link href={splitbeeAnalytics} target="_blank" rel="noopener noreferrer">
                  Statistik Hamsh.me
                </Link>
              </Stack>

              <Stack align={'flex-start'}>
                <Text fontWeight="700" color="#008DEF" fontSize={'lg'} mb={2}>
                  Kebijakan
                </Text>
                <Link href={kebijakanPrivasi}>Kebijakan Privasi</Link>
                <Link href={ketentuanLayanan}>Ketentuan Layanan</Link>
              </Stack>

              {/* <Stack align={'flex-start'}>
                <Text fontWeight="700" color="#008DEF" fontSize={'lg'} mb={2}>
                  Sumber daya
                </Text>
                <Link
                  href="https://github.com/mazipan/Hamsh.me/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Laporkan Isu
                </Link>
                <Link
                  href="https://trakteer.id/mazipan/tip?utm_source=ksana"
                  target="_blank"
                  title="Dukung Hamsh.me"
                  rel="noopener noreferrer"
                >
                  Dukung Hamsh.me
                </Link>
              </Stack> */}

              {/* <Stack align={'flex-start'}>
                <Text fontWeight="700" color="#008DEF" fontSize={'lg'} mb={2}>
                  Karya lain
                </Text>

                <Link
                  href="https://www.baca-quran.id/?utm_source=ksana"
                  target="_blank"
                  title="Cek Baca-Quran.id"
                  rel="noopener noreferrer"
                >
                  Baca-Quran.id
                </Link>
                <Link
                  href="https://pramuka.online/?utm_source=ksana"
                  target="_blank"
                  title="Cek Pramuka.Online"
                  rel="noopener noreferrer"
                >
                  Pramuka.Online
                </Link>
              </Stack> */}
            </SimpleGrid>
          </Container>
        </Box>
      ) : null}

      <Box bg="#008DEF" width="100%">
        <Container maxW={'5xl'}>
          <Flex
            as={Stack}
            py={4}
            alignItems="center"
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ md: 'space-between' }}
            align={{ md: 'center' }}
          >
            <Text>
              © 2021{' '}
              Build by {' '}
              <Link
                textDecoration="underline"
                href={'https://ilhamshf.space/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ilham Shofa
              </Link>
              {' '} Based on {' '}
              <Link
                href={'https://ksana.in/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ksana.in
              </Link>
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
