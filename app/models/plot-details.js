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
          areaOfPlot : Number,
          perimeterOfPlot: Number,
          plotShape :String,
          soilType : String,
          nutrientContentAnalysis: String,
          waterSource : String,
          plotId:String,
          clusterId:String,
          cropType: String,
          variety: String,
          yield: String,
          cultivationDate: String,
          harvestingDate: String,
          seedAmount: Number
      },
      { timestamps: true }
    )
  );
  return AddPlotDetails;
};