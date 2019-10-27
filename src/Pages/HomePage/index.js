import React, { useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

//var [geo, setGeo] = useState({ lat: 37.674652, lng: 126.766636, zoom: 19 })
//const position = [geo.lat, geo.lng]

var geo = {
    lat:37.674652,
    lng:126.766636,
    zoom:19
}
const position = [geo.lat, geo.lng]

// export default function HomePage() {

//     var [geo, setGeo] = useState({ lat: 37.674652, lng: 126.766636, zoom: 19 })
//     const position = [geo.lat, geo.lng]

//     return (
//         <Map className="map" center={position} zoom={geo.zoom}>
//             <TileLayer
//                 attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <Marker position={[geo.lat, geo.lng]}>
//                 <Popup>

//                     grgegrergrg
//                 </Popup>
//             </Marker>
//         </Map>
//     )
// }

export default class HomePage extends React.Component {

    render(){
        return(

        <Map className="map" center={position} zoom={geo.zoom}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[geo.lat, geo.lng]}>
                <Popup>

                    grgegrergrg
                </Popup>
            </Marker>
        </Map>
        )
    }
}