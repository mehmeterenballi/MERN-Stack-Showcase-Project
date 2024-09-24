var https = require("https");

function getFlights(app_id, app_key) {
    return new Promise((resolve, reject) => {
        var options = {
            "method": "GET",
            "hostname": "api.schiphol.nl",
            "port": null,
            "path": "/public-flights/flights",
            "headers": {
                "resourceversion": "v4",
                "app_id": app_id,
                "app_key": app_key
            }
        };

        var req = https.request(options, function (res) {
            var chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function () {
                var body = Buffer.concat(chunks);
                try {
                    var json = JSON.parse(body.toString());
                    resolve(json);
                } catch (error) {
                    reject(error);
                }
            });
        });

        req.on("error", function (e) {
            reject(e);
        });

        req.end();
    });
}

// Usage example with async/await:
async function fetchAllFlights(app_id, app_key) {
    try {
        const data = await getFlights(app_id, app_key);
        return (data);
    } catch (error) {
        console.error("Error fetching flights:", error);
    }
}

module.exports = { fetchAllFlights };