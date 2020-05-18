import {ServiceCandidate } from 'src/app/openApis/ServiceCatalogManagement/models';


export interface ServiceCandidateWithLogo extends ServiceCandidate {
    logo?: string | ArrayBuffer
    fetchingLogo?: boolean
}
