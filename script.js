const Gameboard = (function() {
    let boardArr = [];

    const upperLeftBox = boardArr[0];
    const upperCenterBox = boardArr[1];
    const upperRightBox = boardArr[2];
    const middleLeftBox = boardArr[3];
    const middleCenterBox = boardArr[4];
    const middleRightBox = boardArr[5];
    const lowerLeftBox = boardArr[6];
    const lowerCenterBox = boardArr[7];
    const lowerRightBox = boardArr[8];


    return {    upperLeftBox, upperCenterBox, upperRightBox, 
                middleLeftBox, middleCenterBox, middleRightBox,
                lowerLeftBox, lowerCenterBox, lowerRightBox };

})();

// function createUser (name) {

// } 

// const gameLogic = (function () {

// })();