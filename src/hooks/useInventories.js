import { useEffect, useState } from "react"

const useInventories = (num) => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
            const item = data.slice(0, num)
            setInventories(item)
        })
    }, [])

    return [inventories, setInventories] ;
}


export default useInventories;