document.addEventListener("DOMContentLoaded",
    function () {
        
        
        
        document.getElementById('sendEmail').addEventListener('click', validation);

        function validation(e) {
            let ok = true;
            let mail = document.getElementById('email').value;
            let message = document.getElementById('message').value;
            
            if (mail == "") {
                e.preventDefault();
                missmail.textContent = 'Merci de renseigner votre email svp';
                missmail.style.color = 'red';
                ok = false;
            } else {
                missmail.textContent = '';
            }
            if (message == "") {
                e.preventDefault();
                missmessage.textContent = 'Merci de rédiger votre message svp';
                missmessage.style.color = 'red';
                ok = false;
            } else {
                missmessage.textContent = '';
            }
            if (ok) {
                console.log("OK is true");
                checkRecaptcha();
            }

            function checkRecaptcha() {
                let response = grecaptcha.getResponse();
                if(response.length == 0) { 
                  //reCaptcha not verified
                  alert("Merci de valider comme quoi vous n'êtes pas un robot ^^"); 
                }
                else { 
                  //reCaptch verified
                 sendEmail();
                }
              }
              
              


            function sendEmail() {
                console.log("check mail : " + mail + "\n message : " + message)
                Email.send({
                    SecureToken : "81694574-7bd1-4b47-9d03-e25e6a3f4759",
                    To: 'contact@dix31.org',
                    From: mail,
                    Subject: "Email de contact envoyé depuis dix31.org",
                    Body: "<html><strong>" + message + "</strong></html>"
                }).then(
                    alert("Votre message a bien été envoyé")
                );
            }
        }



        
    });