export interface userFromJWT {	      
    "realm_access": {
        "roles": string[]
    },
    "name": string,
    "preferred_username": string,
    "given_name": string,
    "family_name": string,
    "email": string
}