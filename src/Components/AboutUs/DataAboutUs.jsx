import femaleImg from "../../assets/AboutUsImgFemale.png"
import maleImg from "../../assets/AboutUsImgMale.png"
import imgFirdaus from "../../assets/imgAboutUs/AboutUsImgFirdaus.png"
import imgVania from "../../assets/imgAboutUs/AboutUsImgVania.png"
import imgIlham from "../../assets/imgAboutUs/AboutUsImgIlham.png"
import imgLisa from "../../assets/imgAboutUs/AboutUsImgLisa.png"
import imgRosy from "../../assets/imgAboutUs/AboutUsImgRosy.png"
import imgFebri from "../../assets/imgAboutUs/AboutUsImgFebri.png"

const DataAboutUs = () => {
    return(
        <>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="card" style={{backgroundColor: "#FFFFFF", width: "180vh", marginLeft: "115px", borderRadius: "20px"}}>
            
                <div className="row">
                    <h2 style={{textAlign: "center", marginTop: "60px", fontWeight: "bold"}}>About Us</h2>
                </div>

                <div className="row">
                    <h1 style={{textAlign: "center", marginTop: "40px", fontWeight: "bold", color: "white", webkitTextStroke: "1px black"}}>VolunteGreen</h1>
                </div>

                <div className="row" style={{marginLeft: "100px", marginRight: "100px", marginTop: "40px", textAlign: "justify"}}>
                    <p>VolunteGreen merupakan Tim yang terbentuk karena dipertemukan Skilvul. VolunteGreen juga merupakan sebuah website yang berisikan infromasi pencegahan dari dampak perubahan iklim, dampak pencemaran lingkungan, pencegahan, dan penanggulangannya. Kami juga menawarkan fitur komunitas bagi para pegiat lingkungan agar saling berbagi informasi.</p>
                </div>

                {/* ANAK FRONT-END FE 11 NICHH */}
                <div className="row">
                    <h2 style={{textAlign: "center", marginTop: "40px", fontWeight: "bold", marginBottom: "40px"}}>Front-End</h2>
                </div>

                <div className="d-flex justify-content-evenly" style= {{marginBottom: "40px"}}>
                    <div style={{}}>
                        <img src={imgFirdaus} style={{width: "10vw"}}/>
                        <h3 style={{marginLeft: "20px", marginTop: "14px"}}>Firdaus</h3>
                    </div>

                    <div style={{ marginLeft: "8px"}}>
                        <img src={imgVania} style={{width: "10vw"}}/>
                        <h3 style={{paddingLeft: "34px", marginTop: "8px"}}>Vania</h3>
                    </div>
                    
                    <div style={{}}>
                        <img src={imgIlham} style={{width: "10vw"}}/>
                        <h3 style={{paddingLeft: "34px", marginTop: "14px"}}>Ilham</h3>
                    </div>

                </div>
                
                {/* ANAK BACK-END FE 11 NICHH */}
                <div className="row">
                    <h2 style={{textAlign: "center", marginTop: "40px", fontWeight: "bold", marginBottom: "40px"}}>Back-End</h2>
                </div>

                <div className="d-flex justify-content-evenly">
                    <div style={{ marginLeft: "14px"}}>
                        <img src={imgLisa} style={{width: "10vw"}}/>
                        <h3 style={{paddingLeft: "40px", marginTop: "12px"}}>Lisa</h3>
                    </div>

                    <div style={{ marginLeft: "30px"}}>
                        <img src={imgFebri} style={{width: "10vw"}}/>
                        <h3 style={{paddingLeft: "44px", marginTop: "12px"}}>Febri</h3>
                    </div>
                    
                    <div style={{ marginLeft: "40px"}}>
                        <img src={imgRosy} style={{width: "10vw"}}/>
                        <h3 style={{paddingLeft: "44px", marginTop: "12px"}}>Rosy</h3>
                    </div>

                </div>
                <br/>
                <br/>
    
            </div>
        </>
    )
}

export default DataAboutUs