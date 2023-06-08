
const noteModel = require("../models/note")

const createNote = async (req , res) => {
    const {title  , description} = req.body;

    const newNote = new noteModel({
        title : title,
        description : description,
        userId : req.userId
    });

    try{

        await newNote.save();
        res.status(201).json(newNote);
    
    } catch (error){
        console.log(error);
        res.status(500).json({message : "something went wrong"});
    }

}

const updateNote = async (req , res) => {
    const id = req.params.id; // id of the note
    const {title  , description} = req.body;

    const newNote = {
        title : title,
        description : description,
        userId : req.userId
    }

    try{
        await noteModel.findByIdAndUpdate(id , newNote , {new : true}); //  {new : true} -> first update in db then return the updated note
        res.status(201).json(newNote);
    } catch(error){
        console.log(error);
        res.status(500).json({message : "something went wrong"});
    }

}

const deleteNote = async (req , res) => {
    
    const id = req.params.id; // id of the note

    try{
        const note = await noteModel.findByIdAndRemove(id);
        res.status(202).json(note);

    } catch(error){
        console.log(error);
        res.status(500).json({message : "something went wrong"});
    }

}

const getNotes = async (req , res) => {
    
    try{
        const notes = await noteModel.find({userId : req.userId});
        res.status(200).json(notes);

    } catch (error){
        res.status(500).json({message : "something went wrong"});
    }

}

module.exports = {
    createNote,
    updateNote,
    deleteNote,
    getNotes
}