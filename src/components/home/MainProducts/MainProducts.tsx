import Image from 'next/image'
import styles from './MainProducts.module.css'
import { Box } from '@chakra-ui/react';
const getProducts = async () => {
  
  try {
    const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
      headers: new Headers({
        'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || '',
      }),
    })
    
    const {products} = await response.json(); 
    return products;
  }catch (error) {
    console.error(error);
  }
}

async function MainProducts() {
  const products = await getProducts();
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
        )
      })}
    </div>
  </Box>
  )
}

export default MainProducts
