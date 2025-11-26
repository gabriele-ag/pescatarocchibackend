import {tarots} from "../data/tarots.js"


const index = (req, res) => {

    let result = tarots

    res.json({
        data: result,
        count: tarots.length
    })
}

const tarotsController = {
    index
};

export default tarotsController