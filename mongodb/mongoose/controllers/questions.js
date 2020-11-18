const getAllQuestions = (req, res, next) => {
    res.status(200).json({
        success: true
    });
}

//! bir çok fonksiyonu dışarı aktarmak için obje olarak kullanabiliriz

module.exports = {
    getAllQuestions
};