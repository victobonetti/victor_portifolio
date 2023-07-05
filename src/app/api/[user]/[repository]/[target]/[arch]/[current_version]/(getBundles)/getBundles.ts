import axios from "axios";
import Bundle from "./bundleClass";

export default async function getBundlesForTarget(target: string, repository: string, user: string, current_version: string): Promise<Bundle | void> {

    if (target == 'windows' || target == 'darwin' || target == 'linux') {
        let bundle = new Bundle(target, repository, user);
        return await getBundleData(bundle);
    } else {
        return;
    }
}

async function getBundleData(bundle: Bundle) {

    let GIT_HUB_API = await axios.get(`https://api.github.com/repos/${bundle.user_name}/${bundle.repository_name}/releases/latest`)

    let assets = GIT_HUB_API.data.assets;
    bundle.version = GIT_HUB_API.data.name;
    bundle.notes = GIT_HUB_API.data.body;



    //extract bundles from the github api.
    assets.map((asset: { name: string, browser_download_url: string }) => {
        //MACOS
        if (bundle.name == 'darwin') {
            if (asset.name.includes('.dmg')) {
                bundle.standard_bundle = asset.browser_download_url;
            }

            if (asset.name.includes('.tar.gz')) {
                if (asset.name.includes('.sig')) {
                    bundle.signature = asset.browser_download_url
                } else {
                    bundle.updater_bundle = asset.browser_download_url
                }
            }
        }
 

        //LINUX
        if (bundle.name == 'linux') {
            if (asset.name.includes('AppImage')) {
                if (asset.name.includes('AppImage') && !asset.name.includes('.tar.gz')) {
                    bundle.standard_bundle = asset.browser_download_url;
                }
                if (asset.name.includes('.tar.gz')) {
                    if (asset.name.includes('.sig')) {
                        bundle.signature = asset.browser_download_url
                    } else {
                        bundle.updater_bundle = asset.browser_download_url
                    }
                }
            }
        }

        //WINDOWS
        if (bundle.name == 'windows') {
            if (asset.name.includes('msi')) {
                if (asset.name.includes('.zip')) {
                    if (asset.name.includes('.zip.sig')) {
                        bundle.signature = asset.browser_download_url;
                    } else {
                        bundle.updater_bundle = asset.browser_download_url;
                    }
                } else {
                    bundle.standard_bundle = asset.browser_download_url;
                }
            }

        }
    })

    if (bundle.signature) {
        bundle.signature = (await axios.get(bundle.signature)).data;
        return bundle;
    }

    return;
}