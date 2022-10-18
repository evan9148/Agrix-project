module.exports = mongoose => {
    const AddPlotDetails = mongoose.model(
      "Plot-detail",
      mongoose.Schema(
        {
            farmerId:String,
            state:String,
            location: String,
            village: String,
            district: String,
            latitude: Number,
            long:Number,
            areaOfPlot : String,
            perimeterOfPlot: String,
            plotShape :String,
            soilType : String,
            nutrientContentAnalysis: String,
            waterSource : String,
            plotId:String
        },
        { timestamps: true }
      )
    );
    return AddPlotDetails;
  };