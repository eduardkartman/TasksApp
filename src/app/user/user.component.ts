import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared-resources/card/card.component';

@Component({
	selector: 'app-user',
	standalone: true,
	templateUrl: './user.component.html',
	imports: [CardComponent],
	styleUrl: './user.component.css',
})
export class UserComponent {
	@Input({ required: true }) user!: User;
	@Input({ required: true }) selected!: boolean;
	@Output() select = new EventEmitter<string>();

	get imagePath() {
		return '../../assets/users/' + this.user.avatar;
	}

	onSelectUser() {
		this.select.emit(this.user.id);
	}

	// ******************** Other way ***********************
	// /
	// avatar = input.required<string>();
	// name = input.required<string>();
	// select = output<string>();
	//
	// imagePahe = computed(() => {
	//   return '../../assets/users/' + this.avatar();
	// })
	// ******************************************************
}
