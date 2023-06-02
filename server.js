function signup(event){
    event.preventDefault();
    // alert("working");


    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;

    if(name && email && password && confirmpassword ){
        if(password.length<=8 && confirmpassword.length<=8){
            if(password==confirmpassword){
                var facebook = JSON.parse(localStorage.getItem("facebook_user")) ||[]
                    var flag=false;
                    for(var i=0;i<facebook.length;i++){
                        if(facebook.uemail==email){
                            flag=true;
                        }
                    }
                    if(flag){
                        alert("already exist email");
                    }
                    else{
                        var data ={uname:name,uemail:email,upassword:password,uconfirmpassword:confirmpassword};
                         facebook.push(data);
                         localStorage.setItem("facebook_user",JSON.stringify(facebook));
                            alert("signup successfully");
                            document.getElementById("name").value='';
                            document.getElementById("email").value='';
                            document.getElementById("password").value='';
                            document.getElementById("confirmpassword").value='';
                            window.location.href='./login.html';

                    }


            }
            else{
                console.log("password not match");
            }

        }
        else{
            console.log("password shoul be 8 or more digit");
        }
    }

    else{
        console.log("All fields are required");
    }
}


function login(event){
    event.preventDefault();
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var login_user;
    if(email && password){
        var login_data=JSON.parse(localStorage.getItem("facebook_user"));
        var flag=false;
        for(var i=0;i<login_data.length;i++){
            if(login_data[i].uemail==email){
                flag=true;
                login_user=login_data[i];
            }
        }
        if(flag){
            localStorage.setItem("Facebook_login",JSON.stringify(login_user));
            alert("Login Successful");
            document.getElementById("email").value='';
            document.getElementById("password").value='';
            window.location.href='./home.html';
        }else{
            alert("Credential not matched")
        }

        }

    

    else{
        console.log("all field are required")
    }
}