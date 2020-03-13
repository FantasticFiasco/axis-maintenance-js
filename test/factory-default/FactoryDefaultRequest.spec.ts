import * as chai from 'chai';

import { Connection, FactoryDefaultType, Protocol } from '../../src';
import { FactoryDefaultRequest } from '../../src/factory-default/FactoryDefaultRequest';

chai.should();

describe('factory default request', function() {

    const connection = new Connection(Protocol.Http, '1.2.3.4', 5678, 'root', 'pass');

    describe('#url (partial)', function() {

        it('should return URL', function() {
            // Act
            const request = new FactoryDefaultRequest(connection, FactoryDefaultType.Partial);

            // Assert
            request.url.should.equal(`${connection.url}/axis-cgi/factorydefault.cgi`);
        });

    });

    describe('#url (hard)', function() {

        it('should return URL', function() {
            // Act
            const request = new FactoryDefaultRequest(connection, FactoryDefaultType.Hard);

            // Assert
            request.url.should.equal(`${connection.url}/axis-cgi/hardfactorydefault.cgi`);
        });

    });
});
