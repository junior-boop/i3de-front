"use client"

import { useState } from "react"
import { CiNotification } from "./icons"

export default function NotificationBtn(){
    const [openNotification, setOpenNotification] = useState(false)

    return(
        <div>
            <button className="icon" onClick={() => setOpenNotification(!openNotification)}>
                <CiNotification style = {{ width : 24, height : 24 }}/>
                <div className="pince">
                    0
                </div>
            </button>
            <NotificationView open={openNotification} />
        </div>
    )
}

export function NotificationView({open}){
    return(
        <div className="notificationView" data-open = {open}>
            <div className="notificationHeader">
                <span>Les Notifications</span>
            </div>
            <div className="notificationContent">
                <div className="contentVide">
                    <span>Notification vide</span>
                </div>
            </div>
        </div>
    )
}