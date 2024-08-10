const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
const symbolCharacters = "-_?!@#%$";
const numberCharacters = "0123456789";





function generatePassword() {

    let allCharacters = "";
    let password = "";
    let allowUpper = document.getElementById('uppercase').checked;
    let allowLower = document.getElementById('lowercase').checked;
    let allowSymbols = document.getElementById('symbols').checked;
    let allowNumbers = document.getElementById('numbers').checked;
    let passwordLenght = document.getElementById('lenght').value;

    var x = document.getElementById("passSection");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } 
    else {
      x.style.display = "flex";
    }

    allCharacters += allowUpper == true ? upperCharacters : "" ;
    allCharacters += allowLower == true ? lowerCharacters : "" ;
    allCharacters += allowSymbols == true  ? symbolCharacters : "" ;
    allCharacters += allowNumbers == true ? numberCharacters : "" ;

    for (let i = 0 ; i < passwordLenght ; i ++) {
        const randomCharacter = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomCharacter];
    }

    document.getElementById('password').textContent = password;
    password = "";

    

}


function copyText() {
    var copyText = document.getElementById("password");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Password copied!");
}

