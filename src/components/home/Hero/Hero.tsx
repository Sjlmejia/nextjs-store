import { Heading, Text } from '@chakra-ui/react'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.Hero}>
      <Heading
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl', lg: '6xl'}}
        lineHeight={'110%'}
        textAlign={'center'}
        color={'gray.400'}
      >
        Future World
        <Text as={'span'} color={'green.400'}> The future is now! </Text>
      </Heading>
    </section>
  )
}

export default Hero
