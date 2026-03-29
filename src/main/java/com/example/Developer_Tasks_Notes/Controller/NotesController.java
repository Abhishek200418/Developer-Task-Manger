package com.example.Developer_Tasks_Notes.Controller;

import com.example.Developer_Tasks_Notes.Model.Notes;
import com.example.Developer_Tasks_Notes.Service.NotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173/")
public class NotesController {
    @Autowired
    private NotesService service;
    @PostMapping("notes")
    public Notes addNotes(@RequestBody Notes note){
        return service.addNotes(note);
    }
    @GetMapping("notes")
    public List<Notes> getAllNotes(){
        return service.getAllNotes();
    }
    @DeleteMapping("notes/{id}")
    public void DeleteNote(@PathVariable int id){
        service.Delete(id);
    }
}
