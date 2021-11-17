module.exports.formatMongoData = (data) => {
    if(Array.isArray(data)) {
        let newDataList = [];
        for (value of data) {
            console.log(value);
            newDataList.push(value.toObject());
        }
        return newDataList;
    }
    return data.toObject();
}