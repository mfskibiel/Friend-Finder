//linking routes to a series of "data" sources

var friends = require("../data/friends")


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        console.log(res)
        return res.json(friends)
    })

    app.post("/api/friends", function (req, res) {
        friends.push(req.body);
        res.json(req.body)
        console.log(req.body);
        var stringScores = req.body.scores;
        differencesArr = [];
        //going through each object in the freinds array except for 
        //the last one that we just inserted, then grabbing the scores
        //array. then looping through that to make array to add 
        for (let i = 0; i < (friends.length - 1); i++) {
            friendScores = friends[i].scores;
            numstoAdd = [
                Math.abs(parseInt(friendScores[0]) - parseInt(stringScores[0])),
                Math.abs(parseInt(friendScores[1]) - parseInt(stringScores[1])),
                Math.abs(parseInt(friendScores[2]) - parseInt(stringScores[2])),
                Math.abs(parseInt(friendScores[3]) - parseInt(stringScores[3])),
                Math.abs(parseInt(friendScores[4]) - parseInt(stringScores[4])),
                Math.abs(parseInt(friendScores[5]) - parseInt(stringScores[5])),
                Math.abs(parseInt(friendScores[6]) - parseInt(stringScores[6])),
                Math.abs(parseInt(friendScores[7]) - parseInt(stringScores[7])),
                Math.abs(parseInt(friendScores[8]) - parseInt(stringScores[8])),
                Math.abs(parseInt(friendScores[9]) - parseInt(stringScores[9])),
            ];
            //making array of differences 
            sumofdiff = 0
            for (let y = 0; y < numstoAdd.length; y++) {
                sumofdiff += numstoAdd[y];
            }
            differencesArr.push(sumofdiff);
        };
        console.log(differencesArr);
        Array.min = function (array) {
            return Math.min.apply(Math, array);
        }
        //finding the lowest value in the array made up of hte sum of differences
        var lowest = Array.min(differencesArr);
        lowestIndex = differencesArr.indexOf(lowest);
        for (let z = 0; z < (friends.length - 1); z++) {
            if (z === lowestIndex) {
                console.log(friends[z]);
                // var imagesource = friends[z].photo;
                // var matchphoto = document.getElementById("your-photo").scr = imagesource;
                bestmatch = friends[z];




            }
        };
    });
}


