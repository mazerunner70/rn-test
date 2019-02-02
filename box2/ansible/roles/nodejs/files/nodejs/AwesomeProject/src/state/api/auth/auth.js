import AWS from 'aws-sdk';
import {USERNAME, PASSWORD, POOL_CLIENT_D, REGION, ACCESS_KEY, SECRET_KEY} from 'react-native-dotenv';



export default class Auth {
    constructor() {
        AWS.config.update({
            region: REGION, 
            accessKeyId: ACCESS_KEY, 
            secretAccessKey: SECRET_KEY
        });
        this.cognitoIdentityProvider = new AWS.CognitoIdentityServiceProvider();
        this.handleAuthentication = this.handleAuthentication.bind(this); 
        this.getIdToken = this.getIdToken.bind(this);
        this.getUserName = this.getUserName.bind(this);
        this.storeDetails = this.storeDetails.bind(this);
        this.username = USERNAME;
    }


    handleAuthentication() {
        // console.log('235', this.cognitoIdentityProvider);
        try {
            params= {
                AuthFlow: 'USER_PASSWORD_AUTH',
                AuthParameters: {
                    "USERNAME": USERNAME,
                    "PASSWORD": PASSWORD
                },
                ClientId: POOL_CLIENT_D
            }
    //        console.log(params)
            this.cognitoIdentityProvider.initiateAuth(params, (err, data) => {
                if (err) 
                    console.log(err, JSON.stringify(err.stack));
                else
                    // console.log(data);
                    result = data.AuthenticationResult;
                    // console.log('001',result);
                    this.storeDetails(result);
            })
        } catch(err) {
            console.log('45445', err)
        }
        
    }

    storeDetails(authBlock) {
        this.accessToken = authBlock.AccessToken;
        this.expiresIn = authBlock.ExpiresIn;
        this.refreshToken = authBlock.RefreshToken;
        this.idToken = authBlock.IdToken;
        console.log('id', this.idToken || this.idToken.length);
    }

    getIdToken() {
//        console.log('id0', this.idToken.length);
        return this.idToken;
    }

    getUserName() {
        return this.username;
    }

}