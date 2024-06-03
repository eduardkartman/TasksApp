import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from './tasks.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
	tasks = dummyTasks;

	constructor() {
		const tasks = localStorage.getItem('tasks');
		if (tasks) {
			this.tasks = JSON.parse(tasks);
		}
	}

	getUserTasks(userId: string) {
		return this.tasks.filter(task => task.userId === userId);
	}

	addTask(taskData: NewTask, userId: string) {
		this.tasks.push({
			id: new Date().getTime().toString(),
			userId: userId,
			title: taskData.title,
			summary: taskData.summary,
			dueDate: taskData.date,
		});
		this.saveTasks();
	}

	removeTask(taskId: string) {
		this.tasks = this.tasks.filter(task => task.id !== taskId);
		this.saveTasks();
	}

	private saveTasks() {
		localStorage.setItem('tasks', JSON.stringify(this.tasks));
	}
}
