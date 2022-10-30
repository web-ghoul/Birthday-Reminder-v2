import React from 'react'
import styles from "./Choose.module.css"

//Males Images
import image1 from "../../Img/Males/brv21.jpg"
import image2 from "../../Img/Males/brv22.jpg"
import image3 from "../../Img/Males/brv23.jpg"
import image4 from "../../Img/Males/brv24.jpg"
import image5 from "../../Img/Males/brv25.jpg"
import image6 from "../../Img/Males/brv26.jpg"
import image7 from "../../Img/Males/brv27.jpg"
import image8 from "../../Img/Males/brv28.jpg"
import image9 from "../../Img/Males/brv29.jpg"
import image10 from "../../Img/Males/brv210.jpg"
import image11 from "../../Img/Males/brv211.jpg"
import image12 from "../../Img/Males/brv212.jpg"
import image13 from "../../Img/Males/brv213.jpg"
// import image14 from "../../Img/Males/brv214.jpg"
// import image15 from "../../Img/Males/brv215.jpg"
// import image16 from "../../Img/Males/brv216.jpg"
// import image18 from "../../Img/Males/brv217.jpg"
// import image19 from "../../Img/Males/brv218.jpg"
// import image20 from "../../Img/Males/brv29.jpg"
// import image21 from "../../Img/Males/brv220.jpg"
// import image22 from "../../Img/Males/brv221.jpg"
// import image23 from "../../Img/Males/brv222.jpg"
// import image24 from "../../Img/Males/brv223.jpg"
// import image25 from "../../Img/Males/brv225.jpg"
// import image26 from "../../Img/Males/brv226.jpg"
// import image27 from "../../Img/Males/brv227.jpg"
// import image28 from "../../Img/Males/brv228.jpg"

//Females Images
import Image1 from "../../Img/Females/brv21.jpg"
import Image2 from "../../Img/Females/brv22.jpg"
import Image3 from "../../Img/Females/brv23.jpg"
import Image4 from "../../Img/Females/brv24.jpg"
import Image5 from "../../Img/Females/brv25.jpg"
import Image6 from "../../Img/Females/brv26.jpg"
import Image7 from "../../Img/Females/brv27.jpg"
import Image8 from "../../Img/Females/brv28.jpg"
import Image9 from "../../Img/Females/brv29.jpg"
import Image10 from "../../Img/Females/brv210.jpg"
import Image11 from "../../Img/Females/brv211.jpg"
import Image12 from "../../Img/Females/brv212.jpg"
import Image13 from "../../Img/Females/brv213.jpg"
// import Image14 from "../../Img/Females/brv214.jpg"
// import Image15 from "../../Img/Females/brv215.jpg"
// import Image16 from "../../Img/Females/brv216.jpg"
// import Image18 from "../../Img/Females/brv217.jpg"
// import Image19 from "../../Img/Females/brv218.jpg"
// import Image20 from "../../Img/Females/brv29.jpg"
// import Image21 from "../../Img/Females/brv220.jpg"
// import Image22 from "../../Img/Females/brv221.jpg"
// import Image23 from "../../Img/Females/brv222.jpg"
// import Image24 from "../../Img/Females/brv223.jpg"
// import Image25 from "../../Img/Females/brv225.jpg"
// import Image26 from "../../Img/Females/brv226.jpg"
// import Image27 from "../../Img/Females/brv227.jpg"
// import Image28 from "../../Img/Females/brv228.jpg"

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