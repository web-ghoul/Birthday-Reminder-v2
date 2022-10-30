import React from 'react'
import styles from "./Choose.module.css"

//Males Images
import image1 from "../../Img/Males/Do you know what I mean_, Tariq Viana.jpg"
import image2 from "../../Img/Males/Carlton Banks, Guzz Soares.png"
import image3 from "../../Img/Males/CGAfrica _ Learn, Create and Share Artwork.jpg"
import image4 from "../../Img/Males/Bruno Bock.jpg"
import image5 from "../../Img/Males/Agent J, The Aneesh Arts.jpg"
import image6 from "../../Img/Males/5feb5b2d-a06a-487f-933a-958b96df7b14.jpg"
import image7 from "../../Img/Males/3cef7e43-5c0a-40dc-9d72-6ec688e8e316.jpg"
import image8 from "../../Img/Males/31f895e2-5f6a-4388-bb47-602758bd178d.jpg"
import image9 from "../../Img/Males/14995b85-4712-4990-9157-50fac6014d10.jpg"
import image10 from "../../Img/Males/Dominique sketch, Lucas Andrade.png"
import image11 from "../../Img/Males/Forte3D — Head Study 01.png"
import image12 from "../../Img/Males/He is Rema stylized art_, Dwayne Jones.jpg"
import image13 from "../../Img/Males/Checklist, list icon - Free download on Iconfinder.png"


//Females Images
import Image1 from "../../Img/Females/16, Eiti Sato.jpg"
import Image2 from "../../Img/Females/31 Stylish Digitally Painted Hairstyles - Paintable Gallery.png"
import Image3 from "../../Img/Females/3D модель Мультфильм девушка женщина шарон - TurboSquid 1105191.jpg"
import Image4 from "../../Img/Females/51601168-0a14-4742-ba6d-7a5308f125d5.png"
import Image5 from "../../Img/Females/[𝗠𝗮𝗱 𝗯𝗹𝗼𝗼𝗱] _𝖡𝖾𝗇 𝗍𝖾𝗇𝗇𝗒𝗌𝗈𝗇 𝗑 𝗍𝗎_  - ⁰-¹¿𝓓𝓮𝓼𝓽𝓲𝓷𝓸 𝓸 𝓬𝓪𝓼𝓾𝓪𝓵𝓲𝓭𝓪𝓭_.jpg"
import Image6 from "../../Img/Females/ArtStation - Explore.jpg"
import Image7 from "../../Img/Females/Blender Hair Tutorial, Nazar Noschenko.jpg"
import Image8 from "../../Img/Females/Blender HAIR_ Rendered with EEVEE, composited in Bender_.png"
import Image9 from "../../Img/Females/Breeze, Girish Srinivasagopalan.jpg"
import Image10 from "../../Img/Females/ca9a76cb-d001-4b17-a941-dc733d13cd90.jpg"
import Image11 from "../../Img/Females/Cartoon girl, Javier Benver (1).png"
import Image12 from "../../Img/Females/Cartoon girl, Javier Benver.png"
import Image13 from "../../Img/Females/Pfp icon.png"


function Choose({hideChoose,chooseImageHandle,gender}) {
    if(gender===""){
        gender="male"
    }
    return (
        <div className={hideChoose? styles.hide : styles.choose}>
            <div className={gender==="male"?"":styles.hide}>
                <picture>
                    <img src={image1} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={image2} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={image3} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={image4} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={image5} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={image6} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={image7} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={image8} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={image9} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={image10} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={image11} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={image12} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={image13} alt="" onClick={chooseImageHandle} />
                </picture>
            </div>

            <div className={gender==="female"?"":styles.hide}>
                <picture>
                    <img src={Image1} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={Image2} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={Image3} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={Image4} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={Image5} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={Image6} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={Image7} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={Image8} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={Image9} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={Image10} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={Image11} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={Image12} alt="" onClick={chooseImageHandle} />
                </picture>
                <picture>
                    <img src={Image13} alt="" onClick={chooseImageHandle} />
                </picture>
            </div>
        </div>
    )
}

export default Choose