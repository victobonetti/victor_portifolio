export default class Bundle {
    name: string;
    repository_name: string;
    user_name: string;
    standard_bundle?: string;
    url?: string;
    signature?: string;
    version?: string;
    notes?: string;

    constructor(name: string, repository_name: string, user_name: string) {
        this.name = name;
        this.repository_name = repository_name;
        this.user_name = user_name;
    }

    validData(): boolean {
        if (this.url && this.signature && this.version) {
            return true;
        } else {
            return false;
        }
    }

}