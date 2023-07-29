// Function to generate a random 16-byte access token
function generateAccessToken() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 16; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }
  
  // Function to handle the signup process
  function handleSignup() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Basic validation
    if (!username || !email || !password) {
      document.getElementById('signup-message').innerText = 'Error: All fields are mandatory!';
      return;
    }
  
    // Generate access token
    const accessToken = generateAccessToken();
  
    // Save user details in local storage
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
  
  
    // Show success message and redirect to profile page
    document.getElementById('signup-message').innerText = 'Signup successful.';
    setTimeout(() => {
      window.location.href = 'profile.html';
    }, 1000);
  }
  let sign=document.querySelector(".sign");
  sign.addEventListener('click',()=>{
    alert(" please fill the below information");
  })
  