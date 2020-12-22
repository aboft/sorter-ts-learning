interface Sortable {
	length: number;
	compare(leftIndex: number, rightIndex: number): boolean;
	swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
	// this format is the same as the commented out section below
	// this is just a shorthand way to write it
	
	//constructor(public collection: Sortable) {}

	/*
	collection: number[];

	constructor(collection: number[]) {
		this.collection = collection;
	}
	*/

       abstract compare(leftIndex: number, rightIndex: number): boolean;
       abstract swap(leftIndex: number, rightIndex: number): void;
       abstract length: number;

       sort(): void {
       	const { length } = this;
	
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length - i - 1; j++){
			if (this.compare(j, j+1)){
				this.swap(j, j+1)
			}
		}
	}
       }
}

