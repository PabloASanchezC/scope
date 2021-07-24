var a = "hello";
function Hello() {
    let b = "Hello World";
    const c = "Hello World!";
    if (true) {
        let d = "Hello World!!";
        debugger
    }
}

Hello();

const moneyBox = () => {
    debugger
    var saveCoins = 0;
    const countCoins = (coins) => {
        debugger
        saveCoins += coins;
        console.log(`moneyBox: $${saveCoins}`)
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(7);