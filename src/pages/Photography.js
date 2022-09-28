import flamImage from '../images/flam.JPG'
import bergen from '../images/bergen.JPG'
import birdsFlam from '../images/birdsFlam.JPG'

const flamImg = <img src = {flamImage} />
const bergenImg = <img src = {bergen} />
const birdsFlamImg = <img src = {birdsFlam} />

const images = [flamImg, bergenImg, birdsFlamImg]
const imageList = images.map((image, index)=>
    <li key={index}>{image}</li>
);



export default function Photography(){
    return(
        <>
        <ul>{imageList}</ul>
        </>
    )
}