import Fileupload from "../components/Fileupload"
import Table from "../components/Table"

const Mainpage = () => {
    return (
        <div>
            <div>
                <Table />
            </div>
            <div>
                
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
