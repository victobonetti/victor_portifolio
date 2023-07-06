import { NextResponse } from "next/server";
import getBundlesForTarget from "./(getBundles)/getBundles";

export async function GET(req: Request, { params }: { params: { user: string, repository: string, target: string, arch: string, current_version: string } }) {

    //get url params
    let params_target = params.target;
    let params_arch = params.arch;
    let params_current_version = params.current_version;
    let params_user = params.user;
    let params_repository = params.repository;

    let res_bundle = await getBundlesForTarget({target :params_target, repository: params_repository, user: params_user, current_version: params_current_version});

    if (res_bundle && res_bundle.signature && res_bundle.updater_bundle) {
        return NextResponse.json({
            res_bundle
        })
    } else {
        return NextResponse.json({})
    }

}

