import { APIGatewayEvent } from 'aws-lambda';
import { ResponseObject } from './DomainModel';

export const doLookup: (event: APIGatewayEvent) => Promise<ResponseObject> = async (event: APIGatewayEvent): Promise<ResponseObject> => {
    return new Promise<ResponseObject>((resolve, reject) => {

        // Call WSG

        resolve({message: "Success message", id: 1337});
    })
}