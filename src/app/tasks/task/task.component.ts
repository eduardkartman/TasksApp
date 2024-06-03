import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Task } from '../tasks.model';
import { CardComponent } from '../../shared-resources/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
	selector: 'app-task',
	standalone: true,
	templateUrl: './task.component.html',
	styleUrl: './task.component.css',
	imports: [CardComponent, DatePipe],
})
export class TaskComponent {
	@Input({ required: true }) task!: Task;

	private taskService = inject(TaskService);

	onCompleteTask() {
		this.taskService.removeTask(this.task.id);
	}
}
