document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    var displayDataElement = document.getElementById('display-data');
    displayDataElement.innerHTML = '';
    displayDataElement.style.display = 'block';
  
    var nameParagraph = document.createElement('p');
    nameParagraph.textContent = 'Name: ' + name;
    displayDataElement.appendChild(nameParagraph);
  
    var emailParagraph = document.createElement('p');
    emailParagraph.textContent = 'Email: ' + email;
    displayDataElement.appendChild(emailParagraph);
  
    var passwordParagraph = document.createElement('p');
    passwordParagraph.textContent = 'Password: ' + password;
    displayDataElement.appendChild(passwordParagraph);
  });
  