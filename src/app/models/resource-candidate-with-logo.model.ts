import {ResourceCandidate } from 'src/app/openApis/ResourceCatalogManagement/models';


export interface ResourceCandidateWithLogo extends ResourceCandidate {
    logo?: string | ArrayBuffer
    fetchingLogo?: boolean
}