import { ResourceCandidate } from "src/app/openApis/resourceCatalogManagement/models";


export interface ResourceCandidateWithLogo extends ResourceCandidate {
    logo?: string | ArrayBuffer
    fetchingLogo?: boolean
}
