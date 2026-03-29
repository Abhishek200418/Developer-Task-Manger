package com.example.Developer_Tasks_Notes.Service;

import com.example.Developer_Tasks_Notes.Model.Tasks;
import com.example.Developer_Tasks_Notes.Repository.TaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.config.Task;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepo repo;


    public Tasks addTasks(Tasks tasks){
        return repo.save(tasks);
    }

    public List<Tasks> getAllTasks(){
        return repo.findAll();
    }

    public Tasks UpdateTask(int id, Tasks UpdateTask){
        Tasks tasks=repo.findById(id).orElse(null);
        if(tasks!=null){
           tasks.setTask(UpdateTask.getTask());
           tasks.setDate(UpdateTask.getDate());
           tasks.setStatus(UpdateTask.getStatus());
           return repo.save(tasks);
        }
        return null;
    }

    public void Delete(int id){
        repo.deleteById(id);
    }
}
