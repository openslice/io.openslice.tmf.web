import { ServiceCandidate } from "src/app/openApis/serviceCatalogManagement/models";


export interface ServiceCandidateWithLogo extends ServiceCandidate {
    logo?: string | ArrayBuffer
    fetchingLogo?: boolean
}
