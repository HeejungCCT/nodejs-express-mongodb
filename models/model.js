module.exports = mongoose => {
    const PostSchema = mongoose.Schema({
        item: {
            type: String,
            required: true
        },
        session: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        }
    });
    return PostSchema;
}