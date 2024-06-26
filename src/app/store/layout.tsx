import { Link } from "@chakra-ui/react";
import { getCollections } from "app/services/shopify/collections";

async function Layout({children}: {children: React.ReactNode}) {
  const collections = await getCollections();
  
  return (
    <main>
      <nav>
        {
          collections.map((collection: any) => {
            return (
              <Link key={collection.id} href={`/store/${collection.handle}`}>
                {collection.title}
              </Link>
            )
          })
        }
      </nav>
      {children}
    </main>
  )
}

export default Layout
