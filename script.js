// OTP bananor jontro
function generateOtp(){
    var digits = '0123456789';
    var otpLength = 4;
    var otp = '';
    for(let i=1; i<=otpLength; i++)
    {
        var index = Math.floor(Math.random()*(digits.length));
        otp = otp + digits[index];
    }
    document.getElementById("otpCode").innerHTML = otp;
    console.log(otp);
    
}


// OTP check korar jontro
function check(){
    var otpOutput = document.getElementById("otpCode").innerHTML;
    var otpInput = document.getElementById("checkInput").value;
    if(otpOutput == otpInput){
        console.log("OTP is correct");
        document.getElementById("result").innerHTML = "Congratulations! OTP varified succesfully 😃";
    }
    else{
        console.log("Your OTP is incorrect");
        document.getElementById("result").innerHTML = "Sorry! You enterd wrong OTP 🥺";
    }

    console.log(otpOutput);
}


