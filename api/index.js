// import axios
const { default: axios } = require("axios");
// init router
const router = require("express").Router();

// GET request to get whole object of data 
router.get("/", async (req, res) => {
    const info = await axios.get("https://api.chucknorris.io/jokes/random");

    res.status(200).json({
        massage: "Success!",
        payload: info.data,
    });
});
// GET request to get only value property from incoming data
router.get("/value", async (req, res) => {
    try {
        // send request by axios and grab the incoming Promise obj in the var
        const findJoke = await axios.get("https://api.chucknorris.io/jokes/random");
        // log a massage in the terminal
        console.log("getting data");
        // respond is successfuly resolved
        res.status(200).json(findJoke.data.value);
    } catch(error) {
        res.status(500).json({
            massage: "ERROR",
            error,
        });
    }
});

module.exports = router;