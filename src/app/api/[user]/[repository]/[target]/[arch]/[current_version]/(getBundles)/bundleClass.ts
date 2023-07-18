export default class Bundle {
    name: string;
    repository_name: string;
    user_name: string;
    standard_bundle?: string;
    updater_bundle?: string;
    signature?: string;
    version?: string;
    notes?: string;

    constructor(name: string, repository_name: string, user_name: string) {
        this.name = name;
        this.repository_name = repository_name;
        this.user_name = user_name;
    }

    validData(): boolean {
        if (this.updater_bundle && this.signature && this.version) {
            return true;
        } else {
            return false;
        }
    }

}