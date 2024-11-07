import { useEffect, useState } from "react"
import Warning from '../../assets/warning-sign-svgrepo-com.svg'
import Modal from "./Modal";

export default function Event({data = {}, resolveEvent}){
    const [open, setOpen] = useState(false);


    function handleModal(id) {
        setOpen(!open)
        resolveEvent(id)
        
    }

    return (
        <>
        <div className="border-2 border-black flex justify-center items-center relative">
            {
                data.title ? 
                (
                        <img src={Warning} onClick={() => setOpen(true)} className="absolute w-1/2"/>
                )
                :
                <></>
            }
        </div>
        <Modal data={data} display={open} setDisplay={handleModal}/>
        </>

    )

}