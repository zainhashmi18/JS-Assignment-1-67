 // Chapter1


// Task No 1
alert("Welcome to my Website");

// Task No 2
alert("Error! Please enter a valid password");

// Task No 3
alert("Welcome to JS Land...\nHappy Coding!");

// Task No 4
alert("Welcome to JS Land...");
alert("Happy Coding!");

// Task No 5
alert("Hello I can run JS through my web browser's console");
console.log("Hello I can run JS through my web browser's console")




// chapter2

// Task No 1
var userName="zainhashmi18";

// Task No 2
var myName="Syed Zain Ul Hassan Hashmi";

// Task No 3
var message="Hello World";
var age=22;
var course="Web and Mobile App Development";
alert(message);

// Task No 4
alert("Student Username: "+userName);
alert("Student Name: "+myName);
alert("Student Age: "+age);
alert("Course: "+course);

// Task No 5
var name="PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(name);

// Task No 6
var email="Zainhashmi275@gmail.com";
alert("My Email Address is: "+email);

// Task No 7
var book="A smarter way to learn JavaScript";
alert("I am trying to learn from the Book "+book);

// Task No 8
document.write("Yah! I can write HTML content through JS")

// Task No 9
var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(design);
document.write(design);



// Chapter 3

// Task No 1
var age=22;
alert("I am "+age+" years old");

// Task No 2
var N=14;
alert("You have visited this site "+N+" times");

// Task No 3
var birthyear= +prompt("what is your birth year");
document.write("My Birth Year is "+birthyear+"<br>"+"Data type of my ddecleared variable is number.");

// Task No 4
var visitName= prompt("Sir/Mam your good name please?");
var prodTitle= prompt("Product Name");
var ordQty= +prompt("Order Quantity");
document.write(visitName+ " Ordered "+ordQty+" "+prodTitle+"(s)"+" on XYZ Clothing store" );


// Chapter 4

// Task No 1
var var1,var2,var3;

// Task No 2
// 5 illegal variable names
var my age;
var  *age=22;
var 2prod;
var break;
var :Game;

// 5 Legal variable names
var myName;
var num5;
var $dollar;
var _fan;
var my_age;

// Task No 3
var va1="numbers";
var va2="$";
var va3="_";
var va4="Letter"
var va5="Sensitive"
var va6="Keyword"
document.write("<b>Rules for naming JS variables</b><br>");
document.write("Variable names can only contain "+va1+","+va2+" and"+va3 +". " +"For example $my_1stVariable<br>");
document.write("Variable must begin with "+va4+","+va2+" and"+va3+". " +"For example  $name, _name or name<br>");
document.write("Variable names are case "+va5+"<br>");
document.write("Variable names should not be JS "+va6+"<br>");


// Chapter 5

// Task No 1
var numb1=+prompt("Number 1");
var numb2=+prompt("Number 2");;
var res=numb1+numb2;
document.write("Sum of "+numb1+" and "+numb2+" is "+res);

// Task No 2 (Subtraction)
var numb1=+prompt("Number 1");
var numb2=+prompt("Number 2");;
var res=numb1-numb2;
document.write("Subtraction of "+numb1+" and "+numb2+" is "+res);

//(Multiplication)
var numb1=+prompt("Number 1");
var numb2=+prompt("Number 2");;
var res=numb1*numb2;
document.write("Multiplication of "+numb1+" and "+numb2+" is "+res);

// //(Division)
var numb1=+prompt("Number 1");
var numb2=+prompt("Number 2");;
var res=numb1/numb2;
document.write("Division of "+numb1+" and "+numb2+" is "+res);

// //(Modulus)
var numb1=+prompt("Number 1");
var numb2=+prompt("Number 2");;
var res=numb1%numb2;
document.write("Division of "+numb1+" and "+numb2+" is "+res);

// Task No 3 
var val= +prompt("Value after variable declaration is: ");
document.write("Initial Value is "+val+"<br>");
val+=1;
document.write("Value after increment is: "+val+"<br>")
val+=7;
document.write("Value after Addition is: "+val+"<br>")
val-=1;
document.write("Value after Decrement is: "+val+"<br>")
val%=3;
document.write("The remainder is: "+val+"<br>")


// Task No 4
var movieTicket=600;
var buying= +prompt("Number of ticket you are buying: ")
var ticketCost=movieTicket*buying;
document.write("Total cost to buy "+buying+" ticket(s) to a movie is "+ticketCost+"PKR")

// Task No 5
var tabNum= +prompt("input a number: ")
for(var i=1; i<=10; i++){
    document.write(tabNum+" X "+i+" = "+tabNum*i+"<br>");
}

// Task No 6
var cel=+prompt("Input Temperature in Celsius: ")
var fah=+prompt("Input Temperature in Fahrenheit: ")
var ftoc=(fah-32)*5/9;
var ctof=(cel*9/5)+32;
document.write(cel+"C is "+ctof+"F <br>")
document.write(fah+"F is "+ftoc+"C")

// Task No 7
var price1=+prompt("Price of item 1 ")
var qty1=+prompt("order quantity of item 1 ")
var price2=+prompt("Price of item 2 ")
var qty2=+prompt("order quantity of item 2 ")
var item1price=price1*qty1;
var item2price=price2*qty2;
var shipcharge=100;
var tCost=item1price+item2price+shipcharge;
document.write("Price of item 1 is "+price1+"<br>Quantity of item 1 is "+qty1+"<br>Price of item 2 is "+price2+"<br> Quantity of item 2 is "+qty2+"<br>Shipping Charges are "+shipcharge+"<br>")
document.write("Total Cost of Your Order is "+tCost)

// Task No 8
var tMarks=600;
var obtMarks=+prompt("Input your Obtained Marks: ");
var Perc=obtMarks/tMarks*100;
document.write("Total Marks: "+tMarks+"<br> Obtained Marks: "+obtMarks+"<br>Percentage: "+Perc+"%")

// Task No 9
var usdToPkr=165.22;
var riyalPkr=43.99;
var usd=+prompt("input USD amount: ")
var usdconv=usdToPkr*usd;
var riyal=+prompt("input Riyal amount: ")
var riyalconv=riyalPkr*riyal;
document.write("CURRENCY IN PKR <br>")
document.write("USD to PKR= "+usdconv+"<br>riyal to PKR= "+riyalconv+"<br>Total Currency in PKR: "+(usdconv+riyalconv))

// Task No 10
var nume1=2;
nume1=((nume1+5)*10)/2;
document.write(nume1);

// Task No 11
var byear=1997;
var cyear=2020;
document.write("Current Year: "+cyear+"<br>Birth Year: "+byear+"<br>Your Age: "+(cyear-byear))

// Task No 12
var radius=50;
var cc=2*3.142*radius;
var rsq=radius*radius;
var ac=3.142*rsq;
document.write("Circumference of a circle: "+cc+"<br>Area of a circle: "+ac)

// Task No 13
var favSnack="KitKat";
var cage=22;
var mage=55;
var rage=mage-cage;
var rdays=rage*365;
var eamount=5;
document.write("Favourite Snack: "+favSnack+"<br>Current Age: "+cage+"<br>Maximum Age: "+mage+"<br>Amount of Snacks Per Day: "+eamount+"<br>");
document.write("You will need: "+(eamount*(rdays))+" to last you until the ripe old age of "+mage);


// Chapter No 6-9

//Task NO 1
var a=10;
document.write("Value of a is: "+a+"<br>");
document.write("Value of ++a is: "+(++a)+"<br>");
document.write("Now the value of a is: "+a+"<br>");
document.write("Value of a++ is: "+(a++)+"<br>");
document.write("Now the value of a is: "+a+"<br>");
document.write("Value of --a is: "+(--a)+"<br>");
document.write("Now the value of a is: "+a+"<br>");
document.write("Value of a-- is: "+(a--)+"<br>");
document.write("Now the value of a is: "+a+"<br>");

// Task No 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write(result);
--a;
// here a value will be 1 because it is pre decrement and it will subtract first then move to next variable
--a - --b;
// due to pre decrement a=1 and b=0
--a - --b + ++b;
// (--a - --b)=1 and ++b is 1 because it will add 1 first. so --a - --b + ++b=2
--a - --b + ++b + b--;
// (--a - --b + ++b)=2 and b-- will be 1 becuse it is post decrement so the answer is 3

// Task No 3
var usName=prompt("Enter Your Name: ")
document.write("Hey...!!! "+usName+"<br>Welcome to JS Land")

// Task No 5
var tabNum1= +prompt("input a number: ")
if(tabNum1==0){
    tabNum1=5;
    for(var i=1; i<=10; i++){
        document.write(tabNum1+" X "+i+" = "+tabNum1*i+"<br>");
    }
}
else{
    for(var i=1; i<=10; i++){
        document.write(tabNum1+" X "+i+" = "+tabNum1*i+"<br>");
    }
}

// Task No 6
var math=+prompt("Enter Maths Marks: ")
var eng=+prompt("Enter English Marks: ")
var js=+prompt("Enter JavaScript Marks: ")

subtotal=100;


// Chapter No 9-11

// Task No 1
var cityName=prompt("Enter Your City Name: ");
if(cityName==="karachi" || cityName==="Karachi" ||cityName==="KARACHI"){
    document.write("Welcome to city of lights")
}

// Task No 2
var gen=prompt("Enter Your Gender: ");
if(gen==="male"||gen==="Male"||gen==="MALE"){
    document.write("Good Morning Sir")
}
else if(gen==="female"||gen==="Female"||gen==="FEMALE"){
    document.write("Good Morning Madam")
}
else{
    document.write("Give correct gender")
}

// Task No 3
var siglight=prompt("Enter Traffic Signal Light: ")
if(siglight==="red"||siglight==="Red"||siglight==="RED"){
     document.write("Must Stop")
}
else if(siglight==="yellow"||siglight==="Yellow"||siglight==="YELLOW"){
        document.write("Ready to move")
}
else if(siglight==="green"||siglight==="Green"||siglight==="GREEN"){
    document.write("Move now")
}
else{
    document.write("Give correct Light")
}

// Task No 4
var fuelCheck=+prompt("Enter Remaining Fuel: ");
if(fuelCheck<=0.25){
    document.write("Please refill the fuel in your car")
}
else{
    document.write("You have enough fuel")
}

// Task No 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}     

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("caz" < "cat"){
    alert("car is smaller than cat");
    }
    
// Task No 6
var markObt=+prompt("Enter Obtained Marks: ");
var totmarks=300;
var percen=markObt/totmarks*100;
document.write("Total Marks: "+totmarks+"<br>Obtained Marks: "+markObt+"<br>Percentage: "+percen+"<br>Grade: ")
if(percen>=80){
    document.write("A-One<br>Remarks: Excellent")
}
else if(percen>=70){
    document.write("A<br>Remarks: Good")
}
else if(percen>=60){
    document.write("B<br>Remarks: You Need To Improve")
}
else if(percen<60){
    document.write("Fail<br>Remarks: Sorry")
}

// Task No 7
var SecNum= 4;
var guessNum=+prompt("Guess The Secret Number: ");
if(guessNum===SecNum){
    document.write("Bingo! Correct answer");
}
else(
    document.write("Close enough to the correct answer")
)

// Task No 8
var divNum=+prompt("Enter A Number: ");
if(divNum%3==0){
    document.write("Number is Divisible by 3")
}
else{
    document.write("Number is not Divisible by 3")
}

// Task No 9
var numCheck=+prompt("Enter A Number: ");
if(numCheck%2==0){
    document.write("This is even Number")
}
else{
    document.write("This is Odd Number")
}

// Task No 10
var takeTemp=+prompt("Enter Temperature: ");
if(takeTemp>40){
    document.write("It is too hot outside.")
}
else if(takeTemp>30){
    document.write("The Weather today is Normal.")
}
else if(takeTemp>20){
    document.write("Today’s Weather is cool.")
}
else if(takeTemp>10){
    document.write("OMG! Today’s weather is so Cool.")
}

// Task No 11
var fNum=+prompt("Enter 1st Num: ");
var opNum=prompt("Enter Operater: ");
var sNum=+prompt("Enter 2nd Num: ");
if(opNum==="+"){
    document.write(fNum+sNum);
}
else if(opNum==="-"){
    document.write(fNum-sNum);
}
else if(opNum==="*"){
    document.write(fNum*sNum);
}
else if(opNum==="/"){
    document.write(fNum/sNum);
}
else if(opNum==="%"){
    document.write(fNum%sNum);
}


// Chapter No 12-13

// Task No 1
var numm= prompt("Enter: ");
var storeAscii=numm.charCodeAt(0);
if(storeAscii>=65 && storeAscii<=90){
    document.write("Uppercase")
}
else if(storeAscii>=97 && storeAscii<=122){
    document.write("Lowercase")
}
else if(storeAscii>=48 && storeAscii<=57){
    document.write("Number")
}

// Task No 2
var n1=+prompt("Enter Number 1")
var n2=+prompt("Enter Number 2")
if(n1>n2){
    document.write("Largest is: "+n1);
}
else if(n2>n1){
    document.write("Largest is: "+n2);
}
else if(n2===n1){
    document.write("Numbers Are Equal");
}

// Task No 3
var numinp=+prompt("Enter Number 1");
if(numinp>0){
    document.write("Number is Positive")
}
else if(numinp<0){
    document.write("Number is Negative")
}
else if(numinp==0){
    document.write("Number is 0")
}

// Task No 4
var str=prompt("Enter String: ")
var word=str.length;
if(word==1){
if(str=="a" ||str=="i" ||str=="o"||str=="u"){
    document.write("it is a vowel")
}
else{
    document.write("it is not a vowel")
}
}

// Task No 5
var pass="abcd";
var cpass=prompt("Enter a password: ");
if(cpass===""){
    document.write("Please enter your password");
}
else if(cpass!=pass){
    document.write("Incorrect password");
}
else if(cpass==pass){
    document.write("Correct! The password you entered matches the original password");
}

// Task NO 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
document.write(greeting);
}
else{
greeting = "Good evening";
document.write(greeting);
}

// Task No 7
var time=+prompt("Enter Time: ")
if(time>=0000 && time<1200){
    document.write("Good Morning");
}
if(time>=1200 && time<1700){
    document.write("Good Aftenoon");
}
if(time>=1700 && time<2100){
    document.write("Good Evening");
}
if(time>=2100 && time<2359){
    document.write("Good Night");
}


//Chapter No 14-16

// Task No 1
var studName = [];

// Task No 2
var studNames ={Firstname:"",Lastname:""};

// Task No 3
var animalNames=["elephant","tiger","dog","cat"];
alert(animalNames[1]);

// Task No 4
var numArr=[1,2,3,4,5,6,7,8,9];
alert(numArr[1]);

// Task No 5
var boolArr=[false,true];
alert(boolArr);

// Task No 6
var mixArr=["zain","hashmi",22,'M',2500.25];
alert(mixArr);

// Task No 7
document.write("Qualifilcation<br>");
var eduArr=[ "SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil","PhD"];
document.write(eduArr[0]+"<br>"+eduArr[1]+"<br>"+eduArr[2]+"<br>"+eduArr[3]+"<br>"+eduArr[4]+"<br>"+eduArr[5]+"<br>"+eduArr[6]+"<br>"+eduArr[7]+"<br>");

// Task No 8
var nameStud=["Michael","John","Tony"];
var scoreStud=[320,230,480];
document.write("Score of "+nameStud[0]+" is "+scoreStud[0]+". Percentage is "+scoreStud[0]/500*100+"%<br>");
document.write("Score of "+nameStud[1]+" is "+scoreStud[1]+". Percentage is "+scoreStud[1]/500*100+"%<br>");
document.write("Score of "+nameStud[2]+" is "+scoreStud[2]+". Percentage is "+scoreStud[2]/500*100+"%<br>");

// TasK No 9
var colArr=["Grey","White","Green","Black","Yellow","Orange"];
colAdd=prompt("Add a color in begining: ");
colArr.unshift(colAdd);
document.write(colArr)

// // TasK No 9(b)
var addCol=prompt("Add a color in last: ");
colArr.push(addCol);
document.write(colArr)

// // Task No 9(c)
var addCol2=prompt("Add 1 color: ");
var addCol3=prompt("Add 2 color: ");
colArr.unshift(addCol2,addCol3);
document.write(colArr);

// Task No 9(d)
colArr.shift(1);
document.write(colArr);

// Task no 9(e)
colArr.pop(1);
document.write(colArr);

// Task No 9(f)
var addCol4=prompt("add color: ");
var addPos=prompt("Select Position: ");
colArr.splice(addPos,0,addCol4);
document.write(colArr);

// Task No 9(e)
var delPos=prompt("From which position you want to delete: ");
var qtyCol=prompt("How many Colors You want to delete: ");
colArr.splice(delPos,qtyCol)
document.write(colArr);

// Task No 10
var studScore=[320,350,480,360,250,490,150];
document.write("Scores of Students: "+studScore+"<br>");
var sortedArr=studScore.sort();
document.write("Ordered Scores of Students: "+sortedArr)

// Task No 11
var cityArr=["karachi","lahore","islamabad","hyderabad","multan"];
var selectCity=cityArr.slice(1,4);
document.write(selectCity);

// Task No 12
var arrAnim = ["This","is","my","cat"];
var sepArr=arrAnim.join(" ")
document.write(sepArr);

// Task No 13
var dev=[];
var addDev=prompt("Add Device: ");
var addDev2=prompt("Add Device: ");
var addDev3=prompt("Add Device: ");
var addDev4=prompt("Add Device: ");
dev.push(addDev,addDev2,addDev3,addDev4);
document.write(dev+"<br>");
dev.shift(1)
document.write(dev+"<br>")
dev.shift(2)
document.write(dev+"<br>")
dev.shift(2)
document.write(dev+"<br>")
dev.shift(4)
document.write(dev+"<br>")

// Task No 14
var devi=["keyboard","mouse","printer"];
document.write(devi+"<br>");
var rever=devi.reverse();
document.write(rever);

// Task No 15
var mobComp=["Apple","Samsung", "Motorola", "Nokia", "Sony","Haier"];
document.write(mobComp[0]+"<br>"+mobComp[1]+"<br>"+mobComp[2]+"<br>"+mobComp[3]+"<br>"+mobComp[4]+"<br>"+mobComp[5]+"<br>")


// Chapter No 17-20
// Task No 1
var mulArr=[[],[]];

// Task No 2
var mulArr=[[1,2,3,4],[5,6,7,8],[0,2,4,5]];
document.write(mulArr[0]+"<br>"+mulArr[1]+"<br>"+mulArr[2]+"<br>");

// Task No 3
for (var i=1; i<=10; i++){
    document.write(i+"<br>");
}

// Task No 4
var tabNum2= +prompt("input a number: ")
var tabLength=+prompt("Enter Length: ")
    for(var i=1; i<=tabLength; i++){
        document.write(tabNum2+" X "+i+" = "+tabNum2*i+"<br>");
    }

// Task No 5
var a=["apple", "banana", "mango", "orange","strawberry"];
for (var i in a) {
      document.write(a[i]+"<br>");
     }
     for (var i in a) {
        document.write("Element at index "+i+" is " + a[i]+"<br>");
       }

// Task No 6
for(var i=1;i<=15; i++){
    document.write(i+" ")
}

// Task no 6(b)
for(var i=10;i>=1; i--){
    document.write(i+" ")
}

// Task No 6(c)
for(var i=0;i<=20; i+=2){
    document.write(i+" ")
}

// Task No 6(d)
for(var i=1;i<=20; i+=2){
    document.write(i+" ")
}

// Task No 6(e)
for(var i=2;i<=20; i+=2){
    document.write(i+"K ")
}

// Task No 7
var arrA=["cake","apple pie","cookie","chips","patties"]
var usinp=prompt("search: ");
for(var i=0; i<=20;i++){
    if(usinp===arrA[i]){
        document.write(arrA[i]+ " is availbe at index "+i+" in our bakery<br>")
    }
    else if(usinp!=arrA[i]){
        document.write(" We are sorry."+usinp+" is not available in our bakery")
    }
    break;
}

// Task No 8
var arrNum=[25,85,65,75,88,5];
var large=0;
for(var i=0; i<=arrNum.length;i++){
    if(arrNum[i]>large){
        large=arrNum[i]; 
    }
}
document.write(large)

// Task No 9
var arrNum1=[25,85,65,75,88,5];
var small1=arrNum1.length;
for(var i=0; i<=arrNum1.length;i++){
    if(arrNum1[i]<small1){
        small1=arrNum1[i]; 
    }
}
document.write(small1)

// Task No 10
for(var i=5; i<=100; i+=5){
    document.write(i+", ")
}


 // Chapter 20-25
// Task No 1
var fName=prompt("Enter First Name: ");
var lName=prompt("Enter Last Name: ");
var fullName=fName+" "+lName;
document.write("Welcome "+fullName);

// Task No 2 
var favPhone=prompt("Enter Your Fav Phone Model: ");
var phoneLength=favPhone.length;
document.write("My Favourite Phone is: "+favPhone+"<br>Length of String is: "+phoneLength);

// Task No 3
var country="Pakistani";
var index=country.indexOf("n");
document.write("String "+country+"<br>index of 'n': "+index);

// Task No 4
var word="Hello World";
var ind=word.lastIndexOf("l");
document.write("String "+word+"<br>index of 'n': "+ind);

// Task No 5
var country="Pakistani";
var index=country.charAt(3);
document.write("String "+country+"<br>index of 3: "+index);


// Task No 6
var fName=prompt("Enter First Name: ");
var lName=prompt("Enter Last Name: ");
var fullName=fName.concat(" ",lName);
document.write("Welcome "+fullName);

// Task No 7
var city="Hyderabad";
var repCity=city.replace("Hyder","Islam");
document.write("City: "+city+"<br>After Replacement: "+repCity);

// Task No 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var repAll=message.replaceAll("and","&");
document.write(repAll);

// Task No 9
var strNum="472";
var dType=typeof strNum;
var connum=Number(strNum);
var dType2=typeof connum;
document.write("Value: "+strNum+"<br>Type: "+dType+"<br>Value: "+connum+"<br>Type: "+dType2);

// Task No 10
var eat=prompt("Enter a Word: ");
var changeCase=eat.toUpperCase();
document.write("User Input: "+eat+"<br>Uppercase: "+changeCase)

// Task No 11
var eat=prompt("Enter a Word: ");
var changeCase0= eat.charAt(0);
var changeCase=changeCase0.toUpperCase();
var changeLower=eat.slice(1);
var changeLower0=changeLower.toLowerCase()
document.write("User Input: "+eat+"<br>Uppercase: "+changeCase+changeLower0);

// Task No 12
var varNum=35.36;
var contNum=varNum.toString();
var rem=contNum.replace(".","")
document.write("Number: "+varNum+"<br>Result: "+rem)

// Task No 13
var userName=prompt("Enter Username: ");
var reg= String.fromCharCode(33,44,46,64);
for(var i=0;i<=3;i++){
    var n=reg.charAt(i)
    var a=userName.includes(n);
if(a==true){
    document.write("Please enter a valid username ")
    break;
}
}
if(a!=true){
    document.write("All Fine")
}

// Task No 14
var arrA=["cake","apple pie","cookie","chips","patties"]
var usinp=prompt("search: ");
for(var i=0; i<=20;i++){
    if(usinp===arrA[i]){
        document.write(arrA[i]+ " is availbe at index "+i+" in our bakery<br>")
        break;
    }
}
if(usinp!=arrA[i]){
    document.write(" We are sorry."+usinp+" is not available in our bakery")
}

// Task No 15
var pass=prompt("Enter Password: ");
var rpass=pass.slice(0,1);
var lenPass=pass.length;
for(var i=0;i<=9;i++){
    if(rpass==i){
        document.write("Password can not begin with number.<br>")
        break;
    }
}
if(lenPass<6){
    document.write("Please Enter a valid Password")
}
else{
    document.write("Password Successfully Set")
}

// Task No 16
var university = "University of Karachi";
var newFunc=university.split("");
for(var i=0;i<=20;i++){
    document.write(newFunc[i]+"<br>");
}

// Task No 17
var usInput=prompt("input: ");
var res=usInput.substr(-1);
document.write("Userinput: "+usInput+"<br>Last Character of User Input "+res)

// Task No 18
var word="the quick brown fox jumps over the lazy dog"
document.write(word.match(/the/g).length)



// chapter 26-30

// Task No 1
var userInp=+prompt("Enter a Positive Number: ");
var round=Math.round(userInp)
var floor=Math.floor(userInp);
var ceil=Math.ceil(userInp);
if(userInp>0){
    document.write("Number: "+userInp+"<br>Round Off  Value: "+round+"<br>Floor Value: "+floor+"<br>Ceil Value: "+ceil)
}
else{
    document.write("Please Enter a Positive Number.")
}

// Task No 2
var userInp=+prompt("Enter a Positive Number: ");
var round=Math.round(userInp)
var floor=Math.floor(userInp);
var ceil=Math.ceil(userInp);
if(userInp<0){
    document.write("Number: "+userInp+"<br>Round Off  Value: "+round+"<br>Floor Value: "+floor+"<br>Ceil Value: "+ceil)
}
else{
    document.write("Please Enter a Negative Number.")
}

// Task No 3
var userInp1=+prompt("Enter a Number: ");
var obs=Math.abs(userInp1);
document.write("The absolute value of "+userInp1+" is "+obs);

// Task No 4
var dice=Math.floor((Math.random()*6)+1);
document.write("Random Dice value is: "+dice);

// Task No 5
var dice=Math.floor((Math.random()*2)+1);
if(dice===1){
    document.write(dice+"<br>Random Coin value is: Heads");
}
else{
    document.write(dice+"<br>Random Coin value is: Tails");
}


// Task No 6
var numram=Math.ceil((Math.random()*100));
document.write("Random number between 1and 100: "+numram)

// Task No 7
var userWeight=prompt("Enter Your Weight in Kilograms: ");
var brek=userWeight.slice(0,3);
var changeWeight=Number(brek);
document.write("The Weight of User is: "+changeWeight+" Kilograms")

// Task No 8
var numram=Math.ceil((Math.random()*10));
var useNum=+prompt("Enter a Number between 1and 10:");
if(useNum===numram){
    document.write("congratulations")
}
else{
    document.write("Better Luck Next Time")
}



// Chapter 31-34

// Task No 1
var datee=new Date();
document.write(datee);

// Task No 2
var monarr=['January','February','March','April','May','June','July','August','September','October','November','December'];
var month=new Date();
var curmonth=month.getMonth();
var monthWord=monarr[curmonth];
document.write("Current Month: "+monthWord);

// Task No 3
var d=new Date();
var dayArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var curday=d.getDay();
var dayName=dayArr[curday]
var today=dayName.slice(0,3)
document.write("Today is: "+today);

// Task No 4
var d=new Date();
var dayArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var curday=d.getDay();
var dayName=dayArr[curday]
if(dayName=="Sunday"|| dayName=="Saturday"){
    document.write("Its a Fun Day");
}
else{
    document.write("Its Not a Fun Day")
}

// Task No 5
var d=new Date();
var day=d.getDate();
if(day<16){
    document.write(day+"<br>First fifteen days of the month")
}
else{
    document.write(day+"<br>Last days of the month")
}

//Task No 6
var d=new Date();
var milli1970=d.getTime();
var min1970=(milli1970/1000)/60;
document.write("Current Date: "+d+"<br>Elapsed Miliseconds Since January 1,1970: "+milli1970+"<br>Elapsed Minutes Since January 1,1970: "+min1970);

// Task no 7
var d=new Date();
var day=d.getHours();
if(day<12){
    document.write("Its AM")
}
else{
    document.write("Its PM")
}

// Task no 8
var d=new Date();
d.setMonth(11);
d.setDate(31);
document.write("Later Date: "+d);

// Task no 9
var a=new Date();
a.getDate()
var d=new Date();
d.setMonth(5);
d.setDate(18);
document.write(d.getDate()-a.getDate()+" Days Have Passed Since 1st Ramadan 2020");

// Task no 10
var a=new Date()
var d=new Date("January 1, 2020 12:00:00 GMT+00:00");
var n=a.getTime()-d.getTime();
document.write("Our refference Date "+a+",<br>"+n/1000+" Seconds Has Passed Since Beginning of 2020");

// Task No 11
var a=new Date();
var d=new Date();
d.setHours(d.getHours()+1)
document.write("Current Date: "+a+"<br>1 Hour Ago, it was "+d);

// Task No 12
var a=new Date();
var d=new Date();
d.setFullYear(d.getFullYear()-100)
document.write("Current Date: "+a+"<br>100 Year Back, it was "+d);

// Task No 13
var dob=+prompt("Enter Year Of Birth: ");
var currDate=new Date();
currDate=currDate.getFullYear();
var res=currDate-dob;
document.write("Your Age is: "+res+"<br>Your Dob is: "+dob);

// Task No 14
var cusName=prompt("Enter Your Name: ");
var curMonth=prompt("Current Month: ");
var numUnit=+prompt("Number Of Units: ");
var unitCharge=+prompt("Unit Cost: ");
var amountDue=unitCharge*numUnit;
unitCharge=unitCharge.toFixed(2);
numUnit=numUnit.toFixed(2);
var lateCharge=350;
document.write("<h1><b>K Electric Bill</b></h1><br>Customer Name: "+cusName+"<br>Month: "+curMonth+"<br>Number Of Units: "+numUnit+"<br>Charges Per Unit: "+unitCharge+"<br><br>Net Amount Payable (within Due Date): "+amountDue.toFixed(2)+"<br> Late Payment Surcharge: "+lateCharge+"<br>Gross Amount Payable (after Due Date): "+(amountDue+lateCharge).toFixed(2))



// Chapter 35-38

// Task No 1
function display(){
    document.write(new Date());
}
display();

// Task No 2
function greeting(fname,lname){
    document.write("Welcome "+fname+" "+lname)
}
greeting(prompt("Enter First Name: "),prompt("Enter Last Name: "));

// Task No 3
function Addition(num1,num2){
   return num1+num2;
}
var n=Addition(+prompt("Enter num 1: "),+prompt("Enter num 2: "));
document.write(n);

// Task No 4
function calc(num1,op,num2){
   if(op==="+"){
       return num1+num2;
   }
   else if(op==="-"){
    return num1-num2;
}
else if(op==="*"){
    return num1*num2;
}
else if(op==="/"){
    return num1/num2;
}
}
var n=calc(+prompt("Enter num 1: "),prompt("Enter Operator: "),+prompt("Enter num 2: "));
document.write(n);

// Task No 5
function sqr(num){
    return Math.pow(num,2);
}
var n=sqr(+prompt("Enter a Number and get square: "));
document.write(n);

// Task No 6
function factorial(num){
    if(num == 0 || num == 1){
        return 1;
    }else{
        return num * factorial(num-1);
    }
}
document.write(factorial(5));

// Task No 7
function count(strNum,endNum){
    if(strNum>endNum){
        for(var i=strNum;i>=endNum;i--){
            document.write(i+"<br>")
        }
    }
    else{
        for(var i=strNum;i<=endNum;i++){
            document.write(i+"<br>")
        }
    }
}
count(+prompt("Starting Number: "),+prompt("Ending Number: "));

// Task No 8
function calculateHypotenuse(){

    function calculateSquare(base,prep){
        return Math.sqrt(Math.pow(base,2)+Math.pow(prep,2));
    }
    var n= calculateSquare(+prompt("Enter Base: "),+prompt("Enter Prependicular: "));
    document.write(n);
}
calculateHypotenuse();

// Task No 9
function rectangle(width,hegiht){
    var a =width*hegiht;
    document.write(a);
}
rectangle(7,5);

// Task no 10
function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  alert(palindrome("mom"));

// Task No 11
function string(a) {  
    a = a.split(' ');
    for(var i = 0; i < a.length; i++){
      a[i] = a[i].split('');
      a[i][0] = a[i][0].toUpperCase(); 
      a[i] = a[i].join('');
    }
    return a.join(' ');
  }
  alert(string("the quick brown fox"));

// Task No 12
function long(str){
    var strg=str.split(" ")
        if(strg[0].length>strg[1].length && strg[0].length>strg[2].length){
            return strg[0];
        }
        else if(strg[1].length>strg[0].length && strg[1].length>strg[2].length){
            return strg[1];
        }
        else if(strg[2].length>strg[0].length && strg[2].length>strg[1].length){
            return strg[2];
        } 
}
alert(long("Web Development Tutorial"));

// Task No 13
function count(string, letter) 
{
 var letterCount = 0;
 for (var i = 0; i < string.length; i++) 
 {
    if (string.charAt(i) == letter) 
      {
      letterCount += 1;
      }
  }
  return letterCount;
}
alert(count('zainhashmi', 's'));

// Task No 14
function calcCircumference(radius){
    return (2 * Math.PI *radius);
}
var n=calcCircumference(5);
document.write(n);

// Part 2

function calcArea(radius){
    return (Math.PI *Math.pow(radius,2));
}
var n=calcArea(5);
document.write(n);
 
 
 
// Chapter 38-42


// Task No 1
function power(){
    var a=+prompt("Value 1: ")
    var b=+prompt("Value 2: ")
    var res=a;
    for(var i=1;i<b;i++){
        res=res*a;
    }
    document.write(res);
}
power();

// Task No 2
function leap()
{
    var year=+prompt("Enter Year: ");
    if((year % 100 && year % 400  && year % 4) === 0){
        var a=1;
    }
    else{
        a=0;
    }
    function find() {
        if(a==1){
            document.write(year+" is leap year");
        }
        else if(a==0){
            document.write(year+" is not leap year");
        }
    }
    find();
}
leap();

// Task No 3
function areatriangle() {
    var a,b,c,s;
    a=+prompt("Enter A: ");
    b=+prompt("Enter B: ");
    c=+prompt("Enter C: ");
    s=(a+b+c)/2;
    
    function calcarea() {
        var area= s*(s-a)*(s-b)*(s-c);
        document.write("Area is: "+area);
    }
    calcarea();
}
areatriangle();

// Task No 4
function mainFunction(eng,math,soft) {
    Average(eng,math,soft);
    Percentage(eng,math,soft);
}
mainFunction(+prompt("Enter English Marks: "),+prompt("Enter Maths Marks: "),+prompt("Enter Software Marks: "));

function Average(eng,math,soft) {

    var avg=(eng+math+soft)/3;
    document.write("Average is: "+avg+"<br>");
}
function Percentage(eng,math,soft){
    var perc=((eng+math+soft)/300)*100;
    document.write("Percentage is: "+perc+"%");
}

// Task No 5
function indexFunc() {
    var user=prompt("Enter Name: ");
    document.write("Your Name is: "+user+"<br>");
    var find=prompt("Search For a Character: ");
    var res=user.indexOf(find);
    document.write(find+" is on "+res+" index")
}
indexFunc();

// Task No 6
function delVowls(){
    var str=prompt("Write a sentence: ");
    if(str.length>25){
        alert("Write less then 25");
    }
    else{
        var res= /[aeiou]/gi;
        var nstr=str.replace(res, '');
        document.write(nstr);
    }
}
delVowls();

// Task No 7
function occur(){
        var str=prompt("Write a sentence: ");
            var res= /[aeiou]{2}/gi;
            var nstr=str.replace(res, '');
            document.write(nstr);
}
occur();

// Task No 8
function main(city1,city2) {
    var distance=city1-city2;
    document.write("Distance in Km: "+distance+"<br>");
    meters(distance);
    feets(distance);
    inches(distance);
    centimeters(distance);
}
main(+prompt("Input Distance City1: "),+prompt("Input Distance City2: "))

function meters(distance) {
    var convert=distance*1000;
    document.write("Distance in Meters: "+convert+"<br>")
}
function feets(distance) {
    var convert=distance*3280.84;
    document.write("Distance in Feets: "+convert+"<br>")
}
function inches(distance) {
    var convert=distance*39370.1;
    document.write("Distance in Inches: "+convert+"<br>")
}
function centimeters(distance) {
    var convert=distance*100000;
    document.write("Distance in Centimeters: "+convert+"<br>")
}

// Task No 9
function overTime() {
   var overpay=12;
    var hour=+prompt("Enter your Working Hour: ");
    if(hour>40){
        var time=hour-40;
        var pay=overpay*time;
        document.write("Your Overtime Payment is: "+pay)
    }
}
overTime();

// Task No 10
var inp=+prompt("Enter Amount to Withdraw: ")
document.write("You will have " + Math.floor(inp/100)+" hundred notes <br>"+Math.floor((inp % 100) / 50)+" fifty note <br>"+Math.floor(((inp % 100) % 50) / 10)+" ten notes");


 // Chapter 43-48

 // Task No 1
 function hello() {
    alert('Hello Saylani')
 }

 // Task No 2
 function pop(){
     alert("Thanks for purchasing")
 }

 // Task No 3
 function delrow(r){
    document.getElementById('t1').deleteRow(r);
 }

 // Task No 4
function hover(image1)
{
    image1.src = 'images/2.jpg';
}
function hoverout(image2)
{
    image2.src = 'images/1.jpg';
}

 // Task No 5
 var count=0;
 function count1() {
     count++;
     document.getElementById('counter').innerHTML=count;
 }
 function count2() {
    count--;
    document.getElementById('counter').innerHTML=count;
}


 // Chapter 48-52
  // Task No 1
  function showData() {
    var a=document.getElementById("user_input").value;
    document.getElementById('display').innerHTML = a;
    var b=document.getElementById("user_input1").value;
    document.getElementById('display1').innerHTML = b;
    var c=document.getElementById("user_input2").value;
    document.getElementById('display2').innerHTML = c;
    var d=document.getElementById("user_input3").value;
    document.getElementById('display3').innerHTML = d;
                
}

// Task No 2
function readMore() {
    document.getElementById('pera').innerHTML="Price: 30rs <br> Quality: High <br> Piece Remaining: 40 <br> Offer Validity: 2021 <br> Buy 1: Get 1 Free <br>";
}

// Task No 3
 function delrow(r){
    document.getElementById('t1').deleteRow(r);
 }
function edit() {
    var a = document.getElementById("frm");
  if (a.style.display == "block") {
    a.style.display = "none";
  } 
  else {
    a.style.display = "block";
  }
}


// Chapter 53-58
// Task No 1 and 2
function clickEvent1(i){
  document.getElementById('id1').style.display='block';
  var imgshow=document.getElementById('showimage');
  imgshow.src=i.src;
}
function clickEvent2(){
  document.getElementById('id1').style.display='none'
}
var currSize = 20;
function clickEvent3(){
  var a=document.getElementById('paraid');
  a.style.fontSize=++currSize +"px";
}
function clickEvent4(){
  var a=document.getElementById('paraid');
  a.style.fontSize=--currSize +"px";
}


// Chapter 58-67
// Task No 1
// i
  var e=document.getElementById('main-content');

// ii
  for(var i=0; i<=e.childElementCount*2;i++){
    console.log(e.childNodes[i]);
  }

// iii
  var e=document.getElementById('main-content');
  for(var i=0; i<=e.childElementCount;i++){
    var a=document.getElementsByClassName('render')[i];
    var b=a.childNodes[0].nodeValue;
    document.getElementsByClassName('last')[i].innerHTML = b;
  }

// iv
var a=document.getElementById('first-name');
 a.value="Zain";

// v
var a=document.getElementById('last-name');
var b=document.getElementById('email');
a.value="Hashmi";
b.value="Zainhashmi275@gmail.com";

// Task No 2
// i
var a=document.getElementById('form-content');
  var b=a.nodeType;
  document.write(b)

//ii
var a=document.getElementById('last-name');
var b=a.nodeType +"<br>";
document.write(b)
for(var i=0; i<=a.childElementCount;i++){
  var c=a.childNodes[i].nodeType +"<br>";
  document.write(c)
}

//iii
var newNode=document.createElement('h1');
var txtInNode=document.createTextNode("Hello Saylani");
newNode.appendChild(txtInNode);
document.getElementById('last-name').appendChild(newNode);

//iv
var a=document.getElementById('main-content').firstChild;
document.write(a.innerHTML+"<br>")
var b=document.getElementById('main-content').lastChild;
document.write(b.innerHTML)

//v
var c=document.getElementById('last-name').nextSibling;
document.write(c.innerHTML+"<br>")
var d=document.getElementById('last-name').previousSibling;
document.write(d.innerHTML)

//vi
var a=document.getElementById('email').parentNode;
var b=document.getElementById('email').nodeType;
document.write(a.nodeName +"<br>")
document.write(b)