
interface CategoryProps {
  params: {
    categories: string[]
  }
  searchParams: {
    social?: string
  }
}
function Category(props: CategoryProps) {
  const { categories } = props.params
  return (
    <h1>Categoria dinámica: { categories }</h1>
  )
}

export default Category
