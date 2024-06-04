import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TaskService } from '../tasks.service';

@Component({
	selector: 'app-new-task',
	templateUrl: './new-task.component.html',
	styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
	@Input({ required: true }) userId!: string;
	@Output() close = new EventEmitter(); // new EventEmitter<void>() -> no data to be emitted

	private taskService: TaskService = inject(TaskService);

	enteredTitle = '';
	enteredSummary = '';
	enteredDate = '';

	onCancel() {
		this.close.emit();
	}

	onSubmit() {
		this.taskService.addTask(
			{
				title: this.enteredTitle,
				summary: this.enteredSummary,
				date: this.enteredDate,
			},
			this.userId,
		);
		this.close.emit();
	}
}
