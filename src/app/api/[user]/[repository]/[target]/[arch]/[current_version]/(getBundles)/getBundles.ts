import axios from "axios";
import Bundle from "./bundleClass";

type GitHubAPIResponse = {
    data: {
        assets: any[]; // Tipo dos assets a ser definido
        name: string;
        body: string;
    };
};

type targetProps = {
    target: string, repository: string, user: string, current_version: string
}

type multipleTargetProps = {
    targets: string[], repository: string, user: string, current_version: string
}

export default async function getBundlesForTarget({ target, repository, user, current_version }: targetProps): Promise<Bundle | void> {

    if (target == 'windows' || target == 'darwin' || target == 'linux') {
        let bundle = new Bundle(target, repository, user);
        let GIT_HUB_API = await axios.get(`https://api.github.com/repos/${user}/${repository}/releases/latest`)
        return getBundleData(bundle, GIT_HUB_API);
    } else {
        return;
    }
}

export async function getAllBundles({ targets, repository, user, current_version }: multipleTargetProps) {
    let GIT_HUB_API = await axios.get(`https://api.github.com/repos/${user}/${repository}/releases/latest`)
    let bundles: Bundle[] = [];
    targets.map((target) => {
        let data = getBundleData(new Bundle(target, repository, user), GIT_HUB_API);
        if (data) {
            bundles.push(data);
        }
    })
    return bundles;
}

function getBundleData(bundle: Bundle, GIT_HUB_API: GitHubAPIResponse):Bundle | undefined {

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

    return bundle;
}

