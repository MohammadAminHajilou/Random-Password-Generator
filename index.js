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
    let passwordLength = document.getElementById('length').value;

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

    for (let i = 0 ; i < passwordLength ; i ++) {
        const randomCharacter = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomCharacter];
    }

    document.getElementById('password').textContent = password;
    password = "";

    

}


function copyText() {
    var copyText = document.getElementById("password");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  
}

