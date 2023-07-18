import { NextResponse } from "next/server";
import getBundlesForTarget from "./(getBundles)/getBundles";
import axios from "axios";
import Bundle from "./(getBundles)/bundleClass";

export async function GET(req: Request, { params }: { params: { user: string, repository: string, target: string, arch: string, current_version: string } }) {

    //get url params
    let params_target = params.target;
    let params_arch = params.arch;
    let params_current_version = params.current_version;
    let params_user = params.user;
    let params_repository = params.repository;

    let res_bundle: Bundle | void = await getBundlesForTarget({ target: params_target, repository: params_repository, user: params_user, current_version: params_current_version });

    if (res_bundle && res_bundle.signature && res_bundle.url) {
        try {
            let convertedSignature = await axios.get(res_bundle.signature);
            res_bundle.signature = convertedSignature.data;

            return NextResponse.json({
                version: res_bundle.version,
                url: res_bundle.url,
                signature: res_bundle.signature,
                notes: res_bundle.notes
            })
        } catch (e) {
            return NextResponse.json({e})
        }
    } else {
        return NextResponse.json({})
    }

}

