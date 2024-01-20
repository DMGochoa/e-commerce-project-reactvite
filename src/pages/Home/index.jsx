import { useState, useEffect } from "react"
import { Layout } from "../../components/Layout"
import { Card } from "../../components/Card"
import { ProductDetail } from "../../components/ProductDetail"

function Home() {
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => {
                try {
                    console.log(data.images)
                    for (let i = 0; i < data.length; i++) {
                        data[i].images = data[i].images.map((image) => 
                            image.replace('["', '').replace('"]', '')
                        )
                    }
                    setItems(data)
                } catch (error){
                    console.log('error')
                }
            })
            .catch(err => console.error(err));
        
        
    }, [])

    return (
        <Layout>
            Cosas que voy hacer
            <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
                {
                    items?.map(
                        item => (
                        <Card key={item.id} data={item}/>
                        )
                    )
                }
            </div>
            <ProductDetail />
        </Layout>
    )
}

export { Home }
