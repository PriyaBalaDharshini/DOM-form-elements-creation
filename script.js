function lable_creation(tagname,attriname,attrivalue,content){
    var element=document.createElement(tagname);
    element.setAttribute(attriname,attrivalue);
    element.innerHTML=content;
    return element;
}
 function linebreaker(tagname){
    var element=createElement(tagname);
    return element;
 }
 function input_value(tagname,attriname,attrivalue,attriname1,attrivalue1){
    var element=document.createElement(tagname);
    element.setAttribute(attriname,attrivalue);
    element.setAttribute(attriname1,attrivalue1);
    return element;
 }
 var firstname=lable_creation("lable","for","Firstname","Firstname");
 var br1=linebreaker("br");
 var firstname_input=input_value("input","type","Firstname","id","Firstname");
 var br2=linebreaker("br")

 var middlename=lable_creation("lable","for","Middlename","Middlename");
 var br3=linebreaker("br");
 var middlename_input=input_value("input","type","Middlename","id","Middlename");
 var br4=linebreaker("br")

 var lastname=lable_creation("lable","for","Lastaname","Lastaname");
 var br5=linebreaker("br");
 var lastname_input=input_value("input","type","Lastaname","id","Lastaname");
 var br6=linebreaker("br")

 var email=lable_creation("lable","for","email","email");
 var br7=linebreaker("br");
 var email_input=input_value("input","type","email","id","email");
 var br8=linebreaker("br")

 var password=lable_creation("lable","for","password","password");
 var br9=linebreaker("br");
 var password_input=input_value("input","type","password","id","password");
 var br10=linebreaker("br")
 document.body.append(firstname,br1,firstname_input,br2);
 document.body.append(middlename,br3,middlename_input,br4);
 document.body.append(lastname,br5,lastname_input,br6);
 document.body.append(email,br7,email_input,br8);
 document.body.append(password,br9,password_input,br10);
