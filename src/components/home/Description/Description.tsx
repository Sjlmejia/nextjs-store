import { Box, Center, Image } from "@chakra-ui/react";

export function Description() {
  return (
  <section>
    <Center>
      <Image src="/images/description.jpeg"
          alt="products description"
          fill='cover'
          boxSize='450px'
          fallbackSrc='https://via.placeholder.com/150'
        />
    </Center>
    <Box m={20}>
    <h2>Main Products</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A minima, magni ipsa dignissimos veniam maxime architecto et quo deserunt unde corrupti cupiditate debitis accusantium non quasi saepe provident hic fuga!</p>
    </Box>
  </section>
  )
}

