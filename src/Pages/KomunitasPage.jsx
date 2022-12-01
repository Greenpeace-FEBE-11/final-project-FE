import Komunitas from "../Components/Komunitas/KomunitasUpload"
import KomunitasUploaded from "../Components/Komunitas/KomunitasUploaded"
import Navbar from "../Components/Navbar"

const KomunitasPage = () => {
    return(
        <div id="komunitasPage">
            <Navbar/>
            <Komunitas/>
            <KomunitasUploaded/>
        </div>
    )
}

export default KomunitasPage