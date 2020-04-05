import { Connection, Protocol } from './../../src';

describe('connection', () => {

    describe('#url', () => {

        test('should return URL given HTTP protocol', () => {
            // Act
            const connection = new Connection(Protocol.Http, '1.2.3.4', 5678, 'root', 'pass');

            // Assert
            expect(connection.url).toBe('http://1.2.3.4:5678');
        });

        test('should return URL given HTTPS protocol', () => {
            // Act
            const connection = new Connection(Protocol.Https, '1.2.3.4', 5678, 'root', 'pass');

            // Assert
            expect(connection.url).toBe('https://1.2.3.4:5678');
        });

    });
});
