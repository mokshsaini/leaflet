import { clistModel, noteModel } from "../model/model.js";
import { getUser } from "../services/auth.js";

export async function todo(req, res) {
  const userdata = getUser(req.cookies?.uid);
  if (userdata) {
    const userId = userdata._id;
    const notedata = await noteModel.find({ user: userId });
    const clistdata = await clistModel.find({ user: userId });
    return res.status(200).json({ notedata, clistdata });
  }
  return res
    .status(401)
    .json({ error: "Unauthorized: No valid token provided" });
}

export async function note(req, res) {
  const userdata = getUser(req.cookies?.uid);
  if (userdata) {
    if (req.method == "POST") {
      const notedata = req.body;
      const note = await noteModel.create({ user: userdata._id, ...notedata });
      return res.status(201).json({ success: true, note });
    } else if (req.method == "PATCH") {
      const notedata = req.body;
      const ObjectId = req.params.objid;
      const note = await noteModel.updateOne(
        { _id: ObjectId },
        { $set: notedata },
      );
      if (note.modifiedCount != 0) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(404).json(note);
      }
    } else if (req.method == "DELETE") {
      const ObjectId = req.params.objid;
      const note = await noteModel.findByIdAndDelete(ObjectId);
      if (note == null) {
        return res.status(404).json(note);
      } else {
        return res.status(200).json(note);
      }
    }
  }
  return res
    .status(401)
    .json({ error: "Unauthorized: No valid token provided" });
}

export async function clist(req, res) {
  const userdata = getUser(req.cookies?.uid);
  if (userdata) {
    if (req.method == "POST") {
      const clistdata = req.body;
      console.log(clistdata);
      const clist = await clistModel.create({
        user: userdata._id,
        ...clistdata,
      });
      return res.status(201).json({ success: true, clist });
    } else if (req.method == "PATCH") {
      const clistdata = req.body;
      const ObjectId = req.params.objid;
      const clist = await clistModel.updateOne(
        { _id: ObjectId },
        { $set: clistdata },
      );
      if (clist.modifiedCount != 0) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(404).json(clist);
      }
    } else if (req.method == "DELETE") {
      const ObjectId = req.params.objid;
      const clist = await clistModel.findByIdAndDelete(ObjectId);
      if (clist == null) {
        return res.status(404).json(clist);
      } else {
        return res.status(200).json(clist);
      }
    }
  }
  return res
    .status(401)
    .json({ error: "Unauthorized: No valid token provided" });
}
