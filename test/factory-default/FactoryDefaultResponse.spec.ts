// import * as chai from 'chai';

// import { RestartResponse } from '../../src/restart/RestartResponse';
// import { UnknownError } from '../../src';

// chai.should();

// describe('restart response', function() {

//     describe('#assertSuccess', function() {

//         it('should not throw exception given success response', function() {
//             // Arrange
//             const html =
//                 `<html>
//                     <head>
//                         <meta http-equiv="refresh" content="0;URL=/admin/restartMessage.shtml?server=172.25.75.132">
//                     </head>
//                     <body>
//                     </body>
//                 </html>`;

//             const response = new RestartResponse(html);

//             // Act
//             const fn = () => response.assertSuccess();

//             // Assert
//             fn.should.not.throw();
//         });

//         it('should throw exception given error response without body', function() {
//             // Arrange
//             const html =
//                 `<html>
//                     <head>
//                     </head>
//                     <body>
//                     </body>
//                 </html>`;

//             const response = new RestartResponse(html);

//             // Act
//             const fn = () => response.assertSuccess();

//             // Assert
//             fn.should.throw(UnknownError, 'Request to restart device was not successful');
//         });

//         it('should throw exception given error response with body', function() {
//             // Arrange
//             const html =
//                 `<html>
//                     <head>
//                     </head>
//                     <body>
//                         Error: Some error
//                     </body>
//                 </html>`;

//             const response = new RestartResponse(html);

//             // Act
//             const fn = () => response.assertSuccess();

//             // Assert
//             fn.should.throw(UnknownError, 'Error: Some error');
//         });

//     });
// });
