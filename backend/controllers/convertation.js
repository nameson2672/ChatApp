import Conversation from "../models/Convertation.js";

// Set a new convertation between two user
const newConvertation = async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get a convertation of user with user id
const getConvertationWithId = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get convertation between two user with user id of both
const getConvertationsBetweenUsers = async (req, res) => {
  try {
    console.log(req.parms);
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

export { newConvertation, getConvertationWithId, getConvertationsBetweenUsers };
