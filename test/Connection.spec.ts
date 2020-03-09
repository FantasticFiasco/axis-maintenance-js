import * as chai from 'chai';

import { Connection, Protocol } from './../src';

chai.should();

describe('connection', function() {

    describe('#url', function() {

        it('should return URL given HTTP protocol', function() {
            // Act
            const connection = new Connection(Protocol.Http, '1.2.3.4', 5678, 'root', 'pass');

            // Assert
            connection.url.should.equal('http://1.2.3.4:5678');
        });

        it('should return URL given HTTPS protocol', function() {
            // Act
            const connection = new Connection(Protocol.Https, '1.2.3.4', 5678, 'root', 'pass');

            // Assert
            connection.url.should.equal('https://1.2.3.4:5678');
        });

    });
});
