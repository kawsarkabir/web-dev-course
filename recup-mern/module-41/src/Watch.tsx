import { useEffect, useState } from "react";
import DisplayWatch from "./DisplayWatch";
import { addToLS, getStoredData, removeFromLS } from "./utils/ls";
import DisplayLSData from "./DisplayLSData";

export default function Watch() {
    const [watchs, setWatchs] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch("watchs.json")
            .then(res => res.json())
            .then(data => setWatchs(data))
    }, [])
    useEffect(() => {

        if (watchs.length) {
            const storeData = getStoredData()
            console.log(watchs);
            const saveCart = []
            for (const id of storeData) {
                const watch = watchs.find(watch => watch.id === id)
                if (watch) {
                    saveCart.push(watch)
                }
            }
            console.log("savecart", saveCart);
            setCart(saveCart)

        }
    }, [watchs])

    const handleClick = (watch) => {
        const newCart = [...cart, watch]
        setCart(newCart)
        addToLS(watch.id)
    }

    const handleRemove = id => {
        removeFromLS(id);
        const newCart = cart.filter(item => item.id !== id)
        setCart(newCart)

    }


    return (
        <div>
            <h1 className="text-3xl font-semibold text-center text-sky-500 py-6">Explore Our Popular Products </h1>
            <DisplayLSData cart={cart} handleRemove={handleRemove} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center justify-items-center py-16">
                {
                    watchs?.map(productItems => <DisplayWatch key={productItems.id} productItems={productItems} handleClick={handleClick} />)
                }
            </div>
        </div>
    );
}