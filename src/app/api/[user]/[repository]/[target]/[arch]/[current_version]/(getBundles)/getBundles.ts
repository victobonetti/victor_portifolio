import axios, { AxiosResponse } from "axios";
import Bundle from "./bundleClass";
import { headers } from "next/dist/client/components/headers";

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
    try {
        if (target === 'windows' || target === 'darwin' || target === 'linux') {
            const bundle = new Bundle(target, repository, user);
            const GIT_HUB_API = await axios.get(`https://api.github.com/repos/${user}/${repository}/releases/latest`, {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                }
            });
            return getBundleData(bundle, GIT_HUB_API);
        } else {
            return;
        }
    } catch (error) {
        console.error("Error in getBundlesForTarget:", error);
        throw error;
    }
}

export async function getAllStandardBundles({ targets, repository, user, current_version }: multipleTargetProps) {
    try {
        const GIT_HUB_API = await axios.get(`https://api.github.com/repos/${user}/${repository}/releases/latest`, {
            headers: {
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        const bundles: Bundle[] = [];
        targets.forEach((target) => {
            const data = getBundleData(new Bundle(target, repository, user), GIT_HUB_API);
            if (data) {
                bundles.push(data);
            }
        });
        return bundles;
    } catch (error) {
        console.error("Error in getAllBundles:", error);
        throw error;
    }
}

function getBundleData(bundle: Bundle, GIT_HUB_API: GitHubAPIResponse): Bundle | undefined {
    try {
        const assets = GIT_HUB_API.data.assets;
        bundle.version = GIT_HUB_API.data.name;
        bundle.notes = GIT_HUB_API.data.body;

        assets.forEach((asset: { name: string, browser_download_url: string }) => {
            // MACOS
            if (bundle.name === 'darwin') {
                if (asset.name.includes('.dmg')) {
                    bundle.standard_bundle = asset.browser_download_url;
                }
                if (asset.name.includes('.tar.gz')) {
                    if (asset.name.includes('.sig')) {
                        bundle.signature = asset.browser_download_url;
                    } else {
                        bundle.url = asset.browser_download_url;
                    }
                }
            }

            // LINUX
            if (bundle.name === 'linux') {
                if (asset.name.includes('AppImage')) {
                    if (asset.name.includes('AppImage') && !asset.name.includes('.tar.gz')) {
                        bundle.standard_bundle = asset.browser_download_url;
                    }
                    if (asset.name.includes('.tar.gz')) {
                        if (asset.name.includes('.sig')) {
                            bundle.signature = asset.browser_download_url;
                        } else {
                            bundle.url = asset.browser_download_url;
                        }
                    }
                }
            }

            // WINDOWS
            if (bundle.name === 'windows') {

                if (asset.name.includes('nsis')) {
                    if (asset.name.includes('.zip')) {
                        if (asset.name.includes('.sig')) {
                            bundle.signature = asset.browser_download_url;
                        } else {
                            bundle.url = asset.browser_download_url;
                        }
                    } 
                } 

                if (asset.name.includes('exe')) {
                    bundle.standard_bundle = asset.browser_download_url;
                }
            }
        });

        return bundle;
    } catch (error) {
        console.error("Error in getBundleData:", error);
        throw error;
    }
}
