import Fileupload from "../components/Fileupload"
import Searchbar from "../components/Searchbar"
import Table from "../components/Table"

const Mainpage = () => {
    return (
        <div className="">
            <div className="">
                <Searchbar />
                <br />
                <Table />
            </div>
            <div className="overflow-scroll">
                
            </div>
            <div>
                <h1 className="text-3xl font-bold">
                    Upload file here
                </h1>
            </div>
            <Fileupload/>
        </div>
    )
}
export default Mainpage
