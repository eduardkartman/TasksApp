import { Component, Input, inject } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTask } from './tasks.model';
import { TaskService } from './tasks.service';

@Component({
	selector: 'app-tasks',
	standalone: true,
	imports: [TaskComponent, NewTaskComponent],
	templateUrl: './tasks.component.html',
	styleUrl: './tasks.component.css',
})
export class TasksComponent {
	@Input({ required: true }) userId!: string;
	@Input({ required: true }) name!: string;

	private taskService: TaskService = inject(TaskService);

	// ***************** same as ********************
	// 	constructor(private taskService: TaskService) {}

	isAddingTask = false;

	get selectedUserTask() {
		return this.taskService.getUserTasks(this.userId);
	}

	onStartAddTask() {
		this.isAddingTask = true;
	}

	onCloseAddTask() {
		this.isAddingTask = false;
	}
}
