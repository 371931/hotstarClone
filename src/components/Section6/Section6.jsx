import React from 'react';
import "./Section6.css";
import Items from './Items/Items';
import TV from "../../assets/images/Device imagetv.png";
import PC from "../../assets/images/Device imagepc.png";
import Mobile from "../../assets/images/Device imagemobi.png";
import Console from "../../assets/images/Device imageconsole.png";

export default function Section6() {
    return (
        <section className="section6">
            <div className="header">
                Available on your favorite devices
            </div>
            <div className="devices">
                <Items src={TV} heading="TV" listContent={["Amazon Fire TV",
                    "Android TV devices",
                    "AppleTV",
                    "Chromecast",
                    "LG TV",
                    "Roku",
                    "Samsung",
                    "Xfinity X1 & Flex",
                    "Hisense",
                    "Panasonic"]} />
                <Items src={PC} heading="Computer" listContent={["Chrome OS", "MacOS", "Windows PC"]} />
                <Items src={Mobile} heading="Mobile & Tablet" listContent={["Amazon Fire Tablets", "Android Phones & Tablets", "iPhone and iPad"]} />
                <Items src={Console} heading="Game Consoles" listContent={["PS4",
                    "PS5",
                    "Xbox One",
                    "Xbox Series X",
                    "Xbox Series S"]} />
            </div>
        </section>
    )
}
