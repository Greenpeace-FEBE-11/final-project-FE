import femaleImg from "../../assets/AboutUsImgFemale.png"
import maleImg from "../../assets/AboutUsImgMale.png"
import imgFirdaus from "../../assets/imgAboutUs/AboutUsImgFirdaus.png";
import imgVania from "../../assets/imgAboutUs/AboutUsImgVania.png";
import imgIlham from "../../assets/imgAboutUs/AboutUsImgIlham.png";
import imgLisa from "../../assets/imgAboutUs/AboutUsImgLisa.png";
import imgRosy from "../../assets/imgAboutUs/AboutUsImgRosy.png";
import imgFebri from "../../assets/imgAboutUs/AboutUsImgFebri.png";

import "./aboutUs.css"

const DataAboutUs = () => {
    return(
        <>
            <div className="card cardAboutUs">
            
                <div className="row">
                    <h2 className="aboutUsTitle">About Us</h2>
                </div>

                <div className="row">
                    <h1 className="volunteGreenLogo">VolunteGreen</h1>
                </div>

                <div className="row contentAboutUs">
                    <p>VolunteGreen merupakan Tim yang terbentuk karena dipertemukan Skilvul. VolunteGreen juga merupakan sebuah website yang berisikan infromasi pencegahan dari dampak perubahan iklim dan informasi dampak pencemaran lingkungan. Kami juga menawarkan fitur komunitas bagi para user untuk saling berbagi informasi mengenai masalah lingkungan sekitarnya.</p>
                </div>

                {/* ANAK FRONT-END FE 11 NICHH */}
                <div className="row">
                    <h2 className="aboutUsTitle" id="titleLearnTrack">Front-End</h2>
                </div>

                <div className="d-flex justify-content-evenly profileAboutUs">
                    <div style={{}}>
                        <img src={imgFirdaus} className="imgProfile"/>
                        <h3 className="namaDaus">Firdaus</h3>
                    </div>

                    <div>
                        <img src={imgVania} className="imgProfile"/>
                        <h3 className="namaVania">Vania</h3>
                    </div>
                    
                    <div style={{}}>
                        <img src={imgIlham} className="imgProfile"/>
                        <h3 className="namaIlham">Ilham</h3>
                    </div>

                </div>
                
                {/* ANAK BACK-END FE 11 NICHH */}
                <div className="row">
                    <h2 className="aboutUsTitle" id="titleLearnTrack">Back-End</h2>
                </div>

                <div className="d-flex justify-content-evenly">
                    <div>
                        <img src={imgLisa} className="imgProfile"/>
                        <h3 className="namaLisa">Lisa</h3>
                    </div>

                    <div>
                        <img src={imgFebri} className="imgProfile"/>
                        <h3 className="namaFebri">Febri</h3>
                    </div>
                    
                    <div>
                        <img src={imgRosy} className="imgProfile"/>
                        <h3 className="namaRosy">Rosy</h3>
                    </div>

                </div>
                <br/>
                <br/>
                <br/>
                <br/>
    
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    )
}

export default DataAboutUs