import * as chai from 'chai';

import { add } from '../src/Dummy';

chai.should();

describe('Dummy', () => {

    describe('#add', () => {

        it('should add two numbers', function () {
            const result = add(1, 3);
            result.should.equal(4);
        });

    });

});
