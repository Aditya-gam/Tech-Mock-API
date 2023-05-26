import ApiModel from "../model/Api.model.js";

// Controller function to store data in the database
export async function createApiData(req, res) {
  try {
    // Extract data from the request body
    const {
      userId: userId,
      requestType: request,
      requestBody: requestBody,
      endpointUrl: endpoint,
      responseCode: responseCode,
      responseBody: responseBody,
    } = req.body;
    // Create a new document with the extracted data
    const apiData = new ApiModel({
      userId,
      request,
      requestBody,
      endpoint,
      responseCode,
      responseBody,
    });
    // Save the document to the database
    await apiData.save();
    // Return a success response
    res.status(201).send({ message: "Data saved successfully!" });
  } catch (error) {
    // Return an error response if something goes wrong
    res.status(500).send({ error: error.message });
  }
}

// Controller function to retrieve data from the database
export async function getApiData(req, res) {
  // try {
  //   // Query the database to get all the documents
  //   const apiData = await ApiModel.find();
  //   // Return the data as a response
  //   res.status(200).send(apiData);
  // } catch (error) {
  //   // Return an error response if something goes wrong
  //   res.status(500).send({ error: error.message });
  // }
  const { userId } = req.query;
  try {
    const data = await Api.findById(userId);
    if (!data) {
      return res.status(404).json({ error: "Data not found" });
    }
    return res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Controller function to search for data in the database
export async function searchApiData(req, res) {
  try {
    // Extract data from the request body
    // const { request: requestType, endpoint: endpointUrl } = req.query;
    const userId = req.params.userId;
    const endpointUrl = "/" + req.params[0];
    const requestType = req.method;
    console.log(userId, endpointUrl, requestType);
    // return;
    // Define the query parameters
    // res.status(200).json({ requestType, endpointUrl, userId });
    const query = {
      userId: userId,
      request: requestType,
      endpoint: endpointUrl,
    };
    // if (request === "POST" || request === "PUT") {
    //   query.requestBody = requestBody;
    // }
    // Search the database for matching documents
    const apiData = await ApiModel.findOne(query, {
      responseCode: 1,
      responseBody: 1,
    });
    // console.log(
    //   "🚀 ~ file: apiController.js:81 ~ searchApiData ~ apiData:",
    //   apiData
    // );

    // Return the data as a response
    res.status(apiData?.responseCode).send(apiData?.responseBody);
  } catch (error) {
    // Return an error response if something goes wrong
    res.status(500).send({ error: error.message });
  }
}
