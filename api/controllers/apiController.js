'use strict';

exports.getCirculating = function (req, res) {
   console.log("req->>",req.body)
   
        if (req.body) {
            const results = {result:"welcome!"}
            return res.json(results);
        } else {
            user.password = undefined; 
            return res.status(400).send({
                message: "Error!"
            });
        }
   
};

