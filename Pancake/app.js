var Hello = prompt("Enter Your Name")
alert ("Hello" + " " + Hello + " " + "Welcome To Waqar Zaka's Private Group")
var PF = prompt("Enter Trade Name You want to trade POOL or FARM")
// alert ("You Selected" + " " + PF + " " + "There are 5 coins in" + " " + PF )
if (PF == "pool") { alert ("Welcome in" + " " + PF + " " + "Section" )}
if (PF == "farm") { alert ("Welcome in" + " " + PF + " " + "Section" )}

document.write("FARM COINS" + "<br>" + "<br>") 
var inv = +(prompt("Enter Your Investment..Your Investment should be more than 1000$"))
document.write("These given Abbreviation has following Definitions for you to easily understand" + "<br>" + "1:APR = Annual Per Rate" + "<br>" + "2:ROI= Return On Investment" + "<br>" + "<br>")
document.write("I calculated all these calculation by considering the following rate:" + "<br>" +
               "CAKE as 18$" + "<br>" +
               "GUM as 3$"+ "<br>" +
               "DFT as 0.014$"+ "<br>" )
              
// var APR 

var ROI = (10/100*inv/365)
document.write("If You Invest" + " " + inv + "$" + " " + "in CAKE-BNB your ROI will be" + " " + ROI  + "<br>")
document.write("If You Invest" + " " + inv + "$" + " " + "in DFT-BNB your ROI will be" + " " + ROI  + "<br>")
document.write("If You Invest" + " " + inv + "$" + " " + "in GUM-BNB your ROI will be" + " " + ROI  + "<br>")



