import * as chai from 'chai';

import { Connection, Protocol } from './../../src';
import { RestartRequest } from './../../src/request-response';

chai.should();

describe('restart request', function() {

    const connection = new Connection(Protocol.Http, '1.2.3.4', 80, 'root', 'pass');

    describe('#url', function() {

        it('should return URL', function() {
            // Act
            const request = new RestartRequest(connection);

            // Assert
            request.url.should.equal(`${connection.url}/axis-cgi/restart.cgi`);
        });

    });
});
