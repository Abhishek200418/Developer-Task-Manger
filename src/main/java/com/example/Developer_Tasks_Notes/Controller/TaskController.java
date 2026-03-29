package com.example.Developer_Tasks_Notes.Controller;

import com.example.Developer_Tasks_Notes.Model.Tasks;
import com.example.Developer_Tasks_Notes.Service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173/")
public class TaskController {
    @Autowired
    private TaskService service;
    @PostMapping("tasks")
    public Tasks addtasks(@RequestBody Tasks tasks){
        return service.addTasks(tasks);
    }
    @GetMapping("tasks")
    public List<Tasks> getAllTask(){
        return service.getAllTasks();
    }
    @PutMapping("tasks/{id}")
    public Tasks UpdateTask(@PathVariable int id,@RequestBody Tasks tasks){
        return service.UpdateTask(id,tasks);
    }

    @DeleteMapping("tasks/{id}")
    public void deleteId(@PathVariable int id){
        service.Delete(id);
    }

}
