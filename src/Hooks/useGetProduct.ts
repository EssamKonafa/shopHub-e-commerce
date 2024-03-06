import { useEffect, useState } from "react"

//عايز اقلل الكود ابقي شوف ازاي نعملها علي دي
export interface ProductType {
    id: number,
    title: string,
    image: string
    category: string,
    description: string,
    price: number,
    rating: { rate: number; count: number },
}

export function useGetProducts() {

    const [products, setProducts] = useState<ProductType[]>([])
    const [loader, setLoader] = useState(true)

    const handleGetProducts = async () => {

        try {
            const response = await fetch('https://fakestoreapi.com/products/')
            const data: ProductType[] = await response.json()
            setProducts(data)

        } catch (error) {
            console.error(error);

        } finally {
            setLoader(false)
        }

    }

    useEffect(() => {
        handleGetProducts()
    }, [])

    return products

}