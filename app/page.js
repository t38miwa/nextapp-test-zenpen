"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const ReadAllItems = () => {
    const [allItems, setAllItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readall`, { cache: "no-store" });
            const jsonData = await response.json();
            setAllItems(jsonData.allItems);
            setFilteredItems(jsonData.allItems);
        };
        fetchData();
    }, []);

    const handleSearch = () => {
        const results = allItems.filter(item =>
            item.FavorTeam.toLowerCase() === searchTerm.toLowerCase()
        );
        setFilteredItems(results);
    };

    return (
        <div className="grid-container-in">
            {filteredItems.map(item => 
                <Link href={`/item/readsingle/${item._id}`} key={item._id}> 
                    <Image src={item.Image} width={750} height={500} alt="item-image" priority/>
                    <div> 
                        <h2>好きなチーム: {item.FavorTeam}</h2>
                        <h3>好きな選手: {item.FavorPlayer}</h3>
                        {/*<h3>{item.prefecture}</h3>
                        <h3>{item.email}</h3>*/}
                        <p>{item.description.substring(0, 80)}...</p>  
                    </div>
                </Link>
            )}
        </div>
    );
}

export default ReadAllItems;
