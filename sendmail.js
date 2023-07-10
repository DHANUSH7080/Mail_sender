var nodemail=require('nodemailer');

var sender=nodemail.createTransport({
    service:'gmail',
    auth:{
        user:'dhanushs.ig20@bitsathy.ac.in',
        pass:'8mwcfi7y@'
    }
});

var composemail={
    from: 'dhanushs.ig20@bitsathy.ac.in',
    to:'sundaresan.ig20@bitsathy.ac.in',
    subject: 'Sending mail using node js',
    text: 'Hello sundaresan helloo'
};

sender.sendMail(composemail,function(err,info){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("mail sent successfully");
    }
});