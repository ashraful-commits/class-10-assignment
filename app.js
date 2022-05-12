// # Create an email pattern 


const user_email= 'username019@gmail.com';
// first start with some lowercase alphabet then some number next must use @.gamil.com 
const email_pettern =/^[a-z]{1,}[0-9]{1,}@gmail\.com$/
console.log(email_pettern.test(user_email))



// # Create a  username pattern
const user_name ='Ashraful019'

//first use atlast 1 capital letter than some upercase or lowercase letter that you want next atlast use 3 number
const user_Pettern = /^[A-Z]{1,}[a-z]*[0-9]{3,}$/

console.log(user_Pettern.test(user_name))

// # Create a Bangladeshi phone number pattern

const phone_number ='+8801755127339';
//phone number must be start with +8801 then use atlast 9 number 
const phone_pettern = /^\+8801[0-9]{9}$/;
console.log(phone_pettern.test(phone_number));

// # Create a password pattern 

const password = 'Ashraful@019';
//password start with upercase then use upercase or lowercase or number @#%& ete if you need atlast 8 cheracter
const password_petteren =/^[A-Z]{1,}[A-Za-z0-9@#%&]{8,}/;
console.log(password_petteren.test(password));
// # Create a zipcode pattern  


const zip_code = "Mohammadpur-123";
//zip start with city name. name start with capitalize and - and complete with atlast 1 or more number
const zip_pettern =/^[A-Z]{1}[a-z]*-[0-9]{1,}$/;
console.log(zip_pettern.test(zip_code));
