const jwt = require('jsonwebtoken');

exports.EncodeToken=(email)=> {
   return  jwt.sign({email:email},"ABC123",{expiresIn:'1h'});
}


exports.DecodeToken=(token)=> {
    try {
        return  jwt.verify(token, 'ABC123');
    }
    catch(err) {
        return null;
    }
}





