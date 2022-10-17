module.exports = mongoose => {
    const district = mongoose.model(
        "District",
        mongoose.Schema(
            {
                // {_id:"", district : "",shortName:"", stateid : _id from state}
                district: String,
                districtId: String,
                stateId: [{ type: mongoose.Schema.Types.ObjectId, ref: "state"}],
            },
            { timestamps: true }
        )
    );
    return district;
};