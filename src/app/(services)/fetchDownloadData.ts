import axios from "axios";
import { standardDownloadResponseProps } from "../(interfaces)/standardDownloadResponseProps";
import { gitHubProps } from "../(interfaces)/gitHubProps";



export default async function fetchDownloadData(repository: gitHubProps) {

    const fetch = async (): Promise<standardDownloadResponseProps | undefined> => {
        try {
            if (repository) {
                console.log("Fetching data...")
                let data = await axios.get(`/api/${repository.repositoryOwnerName}/${repository.repositoryName}/`);
                return data.data;
            }
        } catch (e) {
            console.error("Error fetching data.")
            // console.error(e)
            return undefined;
        }
    }

    let data: standardDownloadResponseProps | undefined = await fetch();

    if (data) {
        return data
    }

}