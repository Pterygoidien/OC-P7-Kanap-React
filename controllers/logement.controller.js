const Logements = require('../logements.json');


const getLogements = (req, res) => {

    return res.status(200).json({
        logements: Logements
    });


}

const getLogement = (req, res) => {
    const id = req.params.id;
    const logement = Logements.find(logement => logement.id === id);
    if (logement) {
        return res.status(200).json({
            logement
        });
    } else {
        return res.status(404).json({
            message: 'Logement not found'
        });
    }
}

module.exports = { getLogements, getLogement };