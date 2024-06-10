import Image from "next/image"

const getSingleItem = async(id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/eventpage/readsingle/${id}`, {cache: "no-store"}) 
    const jsonData = await response.json() 
    const singleItem = jsonData.singleItem         
    return singleItem 
}

const ReadSingleItem = async(context) => {                        
    const singleItem = await getSingleItem(context.params.id)     
    return (
        <div>
        <div className="grid-container-si">
            <div>
                <Image src={singleItem.Image} width={750} height={500} alt="item-image" priority/>
            </div>
            <div>
                        <h2>{singleItem.title}</h2>
                        <h3>キーワード:{singleItem.keyword}</h3>
                        <h3>{singleItem.prefecture}: {singleItem.place}</h3>
                        <h3>日時{singleItem.date}</h3>
                        <h3>チーム{singleItem.team}</h3>
                <div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ReadSingleItem