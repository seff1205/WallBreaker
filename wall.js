var hp = 1000000;
var damage = 1;
var money = 0;
var moneyearn = 1;
var upgradecost = 10;
var upgrademult = 1;
var mupgradecost = 50;
var mupgrademult = 1;
var autopunchdamage = 1;
var autopunchernumber = 0;
var autopuncherspeed = 3;
var apcost = 30;
var apscost = 70;
var apdcost = 80;
var funne = 0;

function punchWall(number)
{
    hp -= damage;
    money = money + number;
    document.getElementById("wallHp").innerHTML = "HP: " + hp;
    document.getElementById("money").innerHTML = "Money: " + money;
    document.getElementById("moneyearn").innerHTML = "Money per Hit: " + moneyearn;
    document.getElementById("damage").innerHTML = "Damage per Hit: " + damage;

}

function thingy(event) {
    event.preventDefault();
    punchWall(1);
}

function punchUpgrade(number)
{
    if(money > upgradecost)
    {
        money = money - upgradecost;
        upgradecost = upgradecost + (upgrademult)
        damage += 1;
        upgrademult *= 2;
        document.getElementById("punchupgrade").innerHTML = "Upgrade Punch: " + upgradecost;
        document.getElementById("money").innerHTML = "Money: " + money;
        document.getElementById("damage").innerHTML = "Damage per Hit: " + damage;
    }
}

function moneyUpgrade(number)
{
    if(money > mupgradecost)
    {
        money = money - mupgradecost;
        mupgradecost = mupgradecost + (mupgradecost / 2) + mupgrademult;
        moneyearn += 1;
        mupgrademult *= 2;
        document.getElementById("money").innerHTML = "Money: " + money;
        document.getElementById("moneyearn").innerHTML = "Money per Hit: " + moneyearn;
        document.getElementById("moneyupgrade").innerHTML = "Upgrade Money: " + mupgradecost;
    }
}


function autoBuy()
{
    if(money > apcost)
    {
        money = money - apcost;
        apcost = apcost + (apcost/2);
        autopunchernumber += 1;
        document.getElementById("money").innerHTML = "Money: " + money;
        document.getElementById("autopunchers").innerHTML = "Autopunchers: " + autopunchernumber;
        document.getElementById("autopuncher").innerHTML = "Buy an Autopuncher: " + apcost;
    }
}

function speedBuy()
{
    if(money > apscost)
    {
        money = money - apscost;
        apscost = apscost + (apscost/2);
        autopuncherspeed = autopuncherspeed - (autopuncherspeed/2);
        document.getElementById("money").innerHTML = "Money: " + money;
        document.getElementById("autopunchspd").innerHTML = "Autopuncher Speed: " + autopuncherspeed + " Seconds";
        document.getElementById("speedupgrade").innerHTML = "Increase Autopuncher Speed: " + apscost;
        
    }
}

function autoUpgrade()
{
    if(money > apdcost)
    {
        money = money - apdcost;
        apdcost = apdcost + (apdcost/2);
        autopunchdamage += 1;
        document.getElementById("money").innerHTML = "Money: " + money;
        document.getElementById("autopunchdmg").innerHTML = "Autopuncher Damage: " + autopuncherspeed;
        document.getElementById("apunchupgrade").innerHTML = "Increase Autopuncher Damage: " + apdcost;
    }
}

function autoTimer() 
{
    funne = setInterval(autoPunchHit, (autopuncherspeed * 1000)); 
}

function autoPunchHit()
{
    hp = hp - autopunchdamage;
    money = money + moneyearn;
    document.getElementById("wallHp").innerHTML = "HP: " + hp;
    document.getElementById("money").innerHTML = "Money: " + money;
    
    if(hp < 0)
    {
        alert("With the mighty wall that stood in his way vanquished,\n Guy was finally free to go get a burger. You Win!");
    }
}
//externals
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if(!isChrome){
  ('#iframeAudio').remove()
}
else{
 ('#playAudio').remove() //just to make sure that it will not have 2x audio in the background 
}