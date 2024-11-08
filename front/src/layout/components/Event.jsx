
import { useState, useEffect } from "react"
import Warning from '../../assets/warning-sign.svg'

import Modal from "./Modal";

export default function Event({ data = {}, resolveEvent }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
    }, [data]);

    function handleModal() {
        setOpen(!open);
        resolveEvent();
    }

    return (
        <>
            <div className="flex justify-center items-center relative">
                {
                    data.title ? 
                    (
                        <img src={Warning} onClick={() => setOpen(true)} className="absolute w-1/2" />
                    )
                    :
                    <></>
                }
            </div>
            {open && (
                <Modal data={data} display={open} setDisplay={handleModal} />
            )}
        </>
    )
}