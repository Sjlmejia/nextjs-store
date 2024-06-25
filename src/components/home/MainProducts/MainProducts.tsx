import Image from 'next/image';
import styles from './MainProducts.module.css';
import { Box } from '@chakra-ui/react';

async function MainProducts() {
  const response = await fetch('http://localhost:3000/api/');
  const { products } = await response.json();

  return (
    <Box m={10} className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product:any) => {
          const imageSrc = product.images[0].src;
          return (
            <div className={styles.Item} key={product.id}>
              <p>{product.title}</p>
              <Image className={styles.Image} src={imageSrc} fill alt={product.title} loading="eager" />
            </div>
          );
        })}
      </div>
    </Box>
  );
}

export default MainProducts;
