namespace Stub {

	export class User  {
		firstName!: string;
		lastName!: string;
		birthday!: Date;
		age!: number;
		jocker: any;
	}

	export class Admin extends User  {
		isAdmin!: true
	}

	export class God extends Admin  {
		isGod!: true
	}

	export class Votes {
		up!: number
		down!: number
	}

	export function render() {}

}
