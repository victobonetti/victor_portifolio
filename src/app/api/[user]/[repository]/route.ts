import { NextResponse } from "next/server";
import { getAllStandardBundles } from "./[target]/[arch]/[current_version]/(getBundles)/getBundles";

export async function GET(req: Request, { params }: { params: { user: string, repository: string } }) {
    let params_user = params.user;
    let params_repository = params.repository;

    console.log("API WORKING.")

    const targets = ['windows', 'linux', 'darwin'];

    let bundles = await getAllStandardBundles({ targets: targets, repository: params_repository, user: params_user, current_version: '' });

    console.log({
        version: bundles[0].version,
        windows: bundles[0].standard_bundle,
        linux: bundles[1].standard_bundle,
        darwin: bundles[2].standard_bundle
    })

    return NextResponse.json({
        version: bundles[0].version,
        windows: bundles[0].standard_bundle,
        linux: bundles[1].standard_bundle,
        darwin: bundles[2].standard_bundle
    })
}

