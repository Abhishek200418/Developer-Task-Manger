package com.example.Developer_Tasks_Notes.Service;

import com.example.Developer_Tasks_Notes.Model.Notes;
import com.example.Developer_Tasks_Notes.Repository.Notesrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotesService {
    @Autowired
    private Notesrepo repo;


    public Notes addNotes(Notes notes){
        return repo.save(notes);
    }
    public List<Notes> getAllNotes(){
        return repo.findAll();
    }

    public void Delete(int id){
        repo.deleteById(id);
    }

}
