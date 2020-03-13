import * as chai from 'chai';

import { FactoryDefaultResponse } from '../../src/factory-default/FactoryDefaultResponse';
import { FactoryDefaultType, UnknownError } from '../../src';

chai.should();

describe('factory default response', function() {

    describe('#assertSuccess (partial)', function() {

        it('should not throw exception given success response', function() {
            // Arrange
            const html =
                `<html>
                    <head>
                        <meta http-equiv="refresh" content="0;URL=/admin/factoryMessage.shtml?server=172.25.75.132">
                    </head>
                    <body>
                    </body>
                </html>`;

            const response = new FactoryDefaultResponse(html, FactoryDefaultType.Partial);

            // Act
            const fn = () => response.assertSuccess();

            // Assert
            fn.should.not.throw();
        });

        it('should throw exception given error response without body', function() {
            // Arrange
            const html =
                `<html>
                    <head>
                    </head>
                    <body>
                    </body>
                </html>`;

            const response = new FactoryDefaultResponse(html, FactoryDefaultType.Partial);

            // Act
            const fn = () => response.assertSuccess();

            // Assert
            fn.should.throw(UnknownError, 'Request to reset device to factory default was not successful');
        });

        it('should throw exception given error response with body', function() {
            // Arrange
            const html =
                `<html>
                    <head>
                    </head>
                    <body>
                        Error: Some error
                    </body>
                </html>`;

            const response = new FactoryDefaultResponse(html, FactoryDefaultType.Partial);

            // Act
            const fn = () => response.assertSuccess();

            // Assert
            fn.should.throw(UnknownError, 'Error: Some error');
        });

    });

    describe('#assertSuccess (hard)', function() {

        it('should not throw exception given success response', function() {
            // Arrange
            const html =
                `<html>
                    <head>
                        <meta http-equiv="refresh" content="0;URL=/admin/factoryMessage2.shtml?server=172.25.75.132">
                    </head>
                    <body>
                    </body>
                </html>`;

            const response = new FactoryDefaultResponse(html, FactoryDefaultType.Hard);

            // Act
            const fn = () => response.assertSuccess();

            // Assert
            fn.should.not.throw();
        });

        it('should throw exception given error response without body', function() {
            // Arrange
            const html =
                `<html>
                    <head>
                    </head>
                    <body>
                    </body>
                </html>`;

            const response = new FactoryDefaultResponse(html, FactoryDefaultType.Hard);

            // Act
            const fn = () => response.assertSuccess();

            // Assert
            fn.should.throw(UnknownError, 'Request to reset device to factory default was not successful');
        });

        it('should throw exception given error response with body', function() {
            // Arrange
            const html =
                `<html>
                    <head>
                    </head>
                    <body>
                        Error: Some error
                    </body>
                </html>`;

            const response = new FactoryDefaultResponse(html, FactoryDefaultType.Hard);

            // Act
            const fn = () => response.assertSuccess();

            // Assert
            fn.should.throw(UnknownError, 'Error: Some error');
        });

    });
});
