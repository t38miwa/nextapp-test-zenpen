import Link from 'next/link'
import Image from 'next/image'

const getAllItems = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/eventpage/readall`, {cache: "no-store"})
    const jsonData = await response.json()
    const allItems = jsonData.allItems
    return allItems
}

const ReadAllItems = async() => {
    const allItems = await getAllItems()
    return (
        <div>
        <h1>イベント一覧</h1>
        <div className="grid-container-in">
            {allItems.map(item => 
                <Link href={`/eventpage/readsingle/${item._id}`} key={item._id}> 
                    <Image src={item.Image} width={750} height={500} alt="item-image" priority/>
                    <div> 
                        <h2>{item.title}</h2>
                        <h3>キーワード{item.keyword}</h3>
                        <h3>{item.prefecture}: {item.place}</h3>
                        <h3>日時{item.date}</h3>
                        <h3>チーム{item.team}</h3>
                    </div>
                </Link>
            )}
        </div>
        </div>
    )
} 

export default ReadAllItems