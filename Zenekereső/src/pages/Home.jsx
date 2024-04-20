import Fileupload from "../components/Fileupload"
import Searchbar from "../components/Searchbar"


const Mainpage = () => {
    return (
        <div>
            <Searchbar />
            <div>
                <h1 className="text-3xl font-bold">
                    Upload file here
                </h1>
                <br />
            </div>
            <Fileupload/>
        </div>
    )
}
export default Mainpage
