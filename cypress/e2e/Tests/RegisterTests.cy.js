import Main from "../pages/ParaBank/Main"; 
import Register from "../pages/ParaBank/Register";
import BaseLib from "../pages/Base/BaseLib";


describe('Register Module ', () => {
  
    const main = new Main;
    const register = new Register;
    const baseLib = new BaseLib;

it('TestCase0001 - Login user control', () => { 
// her seferinde rastgele bir kullanıcı ismi ile giriş ve metin kontrolü.
   var username = "frkn"+ baseLib.randomNummer();

    main
    .openWebsite()
    .registerClick();

    register
    .fillFirstName("Furkan")
    .fillLastName("YILDIRIM")
    .fillAdress("ANKARA/Etimesgut")
    .fillCity("Etimesgut")
    .fillState("TÜRKİYE")
    .fillzipCode(789456123)
    .fillphoneNumber("0505050505")
    .fillssn("123456")
    .fillusername(username)
    .fillpassword("yldrm456")
    .fillrepeatedPassword("yldrm456")
    .registerButton()
    .loggedInControl("Welcome "+username);

})


it('TestCase0002 - Login user NULL control', () => { 

    //Aynı kullanıcı ismi ile giriş yapıldığında hata metninin gelme durumu kotrol edilir.
   
     main
     .openWebsite()
     .registerClick();
 
     register
     .fillFirstName("Furkan")
     .fillLastName("YILDIRIM")
     .fillAdress("ANKARA/Etimesgut")
     .fillCity("Etimesgut")
     .fillState("TÜRKİYE")
     .fillzipCode(789456123)
     .fillphoneNumber("0505050505")
     .fillssn("123456")
     .fillusername("frkn")
     .fillpassword("yldrm456")
     .fillrepeatedPassword("yldrm456")
     .registerButton()
     .usernameErrorControl("This username already exists.")
 // Başarılı
 })
 
 it('TestCase0003 - Login fail user control', () => { 

    //firstname alanı boş gönderilince hata metni gelme durumu
   
     main
     .openWebsite()
     .registerClick();
 
     register
     //.fillFirstName("")
     .fillLastName("YILDIRIM")
     .fillAdress("ANKARA/Etimesgut")
     .fillCity("Etimesgut")
     .fillState("TÜRKİYE")
     .fillzipCode(789456123)
     .fillphoneNumber("0505050505")
     .fillssn("123456")
     .fillusername("frkn")
     .fillpassword("yldrm456")
     .fillrepeatedPassword("yldrm456")
     .registerButton()
     .firstnameErrorControl("First name is required.")
 // Başarılı
 })


})                       