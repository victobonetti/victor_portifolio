import axios from "axios";
import { standardDownloadResponseProps } from "../(interfaces)/standardDownloadResponseProps";
import { gitHubProps } from "../(interfaces)/gitHubProps";



export default async function fetchDownloadData(repository: gitHubProps) : Promise<standardDownloadResponseProps | undefined> {
        try {
            console.log("Fetch!")
            if (repository) {
                console.log("Fetching data...")
                let data = await axios.get(`https://victor-portifolio.vercel.app/api/${repository.repositoryOwnerName}/${repository.repositoryName}/`);
                return data.data;
            }
        }
         catch (e) {
            console.error("Error fetching data.")
            // console.error(e)
            return undefined;
        }

}