import { doLookup } from '../src/functionLogic';
import { expect } from 'chai';
import { APIGatewayEvent } from 'aws-lambda';
import { fail } from 'assert';
import { ResponseObject } from '../src/DomainModel';
const fs = require('fs');

describe('Test Suite', () => {

    it('Can find an existing record', () => {
        const testEvent = JSON.parse(fs.readFileSync('events/sample-get-event.json')) as APIGatewayEvent;

        return doLookup(testEvent).then((response: ResponseObject) => {
            if (response.message) {
                expect(response.message).to.be.equal('Success message');
                expect(response.id).to.be.equal(1337);
            } else {
                fail(null, 'Expected response.message but there was none.');
            }
        });
    });
});