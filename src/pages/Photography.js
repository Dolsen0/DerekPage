import flamImage from '../images/flam.JPG'
import bergen from '../images/bergen.JPG'
import birdsFlam from '../images/birdsFlam.JPG'
import { Image } from 'react-bootstrap'

const flamImg = <Image src = {flamImage} thumbnail true />
const bergenImg = <Image src = {bergen} thumbnail true />
const birdsFlamImg = <Image src = {birdsFlam} thumbnail true />

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