import { NextResponse } from "next/server";
import getBundlesForTarget from "./[target]/[arch]/[current_version]/(getBundles)/getBundles";

export async function GET(req: Request, { params }: { params: { user: string, repository: string } }) {
    let params_user = params.user;
    let params_repository = params.repository;

    console.log("API WORKING.")

    const targets = ['windows', 'linux', 'darwin'];

    let windows = await getBundlesForTarget(targets[0], params_repository, params_user, '');
    let linux = await getBundlesForTarget(targets[1], params_repository, params_user, '');
    let macos = await getBundlesForTarget(targets[2], params_repository, params_user, '');
    
    if (windows && linux && macos) {
        console.log({
            windows: windows.standard_bundle,
            linux: linux.standard_bundle,
            macos: macos.standard_bundle
        })

        return NextResponse.json({
            windows: windows.standard_bundle,
            linux: linux.standard_bundle,
            macos: macos.standard_bundle
        })
    }

}