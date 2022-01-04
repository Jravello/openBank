# Server API Open Bank 🕷
## Features

- Typescript
- NodeJs
- Express
- Middleware: Helmet, Urlencoded, Morgan
- Mongoose, MongoDB
- JWT, Encoder, Decoder
- Anothers : Cors, Nodemon, Underscore, Prettier, Jest

Validator the apis conected with socket and validate unvailable conections; 

I Have a SuperNumber that is generated for 24 hours;
SuperNumber is Encoded and this is sended with the firs contact with OpenBankAPI(OBA) ;
OpenBankAPI know the API for the name in package.json and port;
The port and name must be sent in first call for validation;
OpenBankAPI have this parameters in DB of conections;
When call for petition OpenBankAPIcreate a audit;
Use the Secret to open the routes in server and use the Key to encode-decode information.
The Secret and The Key is provided from headers of the anothers apis.
The Secret that comes from anothers apis is compared with array of Secrets saved in the envConfig;
The Key is provided for the anothers APIs and this is saved with information created for decode later;

## The Flow
- First contact 
- Validate in OBA for the another apis
- Send SuperNumber
- Information is Encoded { tokenEncodedWithInformation, Secret and Key Encoded in Headers , Super Number }; 
- Send from Api - To Api Open Bank 
- Decoded the Secret with Super Number
- Process the Secret in inversor
- Decoded the Key with Secret
- Decoded the info with Key
- Save Update Create a info never Delete (Inactive a information ) 
- Save audit
- return a information created decoded with superNumber how key
-