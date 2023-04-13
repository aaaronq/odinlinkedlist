function node(value) {
	if (!value)
		return {
			value: null,
			next: null,
		};
	return {
		value,
		next: null,
	};
}

const linkedList = (() => {
	let HEAD = null;
	let length = 0;

	const head = () => {
		if (!HEAD) return null;
		return HEAD.value;
	};

	const tail = () => {
		if (!HEAD) return null;
		let pointer = HEAD;
		while (pointer.next != null) {
			pointer = pointer.next;
		}
		return pointer.value;
	};

	const append = (value) => {
		const newNode = node(value);
        length++;
		if (HEAD === null) {
			HEAD = newNode;
			return;
		}
		let pointer = HEAD;
		while (pointer.next != null) {
			pointer = pointer.next;
		}
		pointer.next = newNode;
	};

	const prepend = (value) => {
		const newNode = node(value);
        length++;
		if (HEAD === null) {
			HEAD = newNode;
			return;
		}
		newNode.next = HEAD;
		HEAD = newNode;
	};

	const printList = () => {
		console.log(HEAD);
	};

    const size = () => console.log(`There are ${length} items in the linked list`);

    const at = (index) => {
        if (HEAD === null || index >= length || index < 0 || !Number.isInteger(index)) return false;
        let pointer = HEAD;
        let i = 0;
        while (i < index) {
            pointer = pointer.next
            i++
        }
        return pointer.value;
    }
    
    const pop = () => {
        if (!HEAD) return null;
		let pointer = HEAD;
		while (pointer.next.next != null) {
			pointer = pointer.next;
		}
        pointer.next = null;
        length--;
    }

    const contains = (value) => {
        if (!HEAD) return false;
        let pointer = HEAD;
        while (pointer != null) {
            if (pointer.value === value) return true;
            pointer = pointer.next;
        }
        return false;
    }

	const find = (value) => {
		if (!HEAD) return false;
		let pointer = HEAD;
		let index = 0;
		while (pointer != null) {
			if (pointer.value === value) return index;
			pointer = pointer.next;
			index++;
		}
		return false;
	}

	const toString = () => {
		if (HEAD === null) return "";
		let string = "";
		let pointer = HEAD;
		while (pointer != null) {
			string += `(${pointer.value}) -> `
			pointer = pointer.next
		}
		string += "null";
		return string;
	}

	const insertAt = (value, index) => {
		if (!value || index < 0 || index > length || !Number.isInteger(index) || HEAD === null && index > 0) return false;
		else if (index === 0) return prepend(value);
		const newNode = node(value);
		let pointer = HEAD;
		let i = 0;
		while (i < index - 1) {
			pointer = pointer.next;
			i++;
		}
		newNode.next = pointer.next;
		pointer.next = newNode;
		length++;
	}

	const removeAt = (index) => {
		if (index  < 0 || HEAD === null || index > length - 1 || !Number.isInteger(index)) return false;
		let pointer = HEAD;
		if (index === 0) {
			length--
			HEAD = pointer.next;
			return;
		}
		let i = 0;
		while (i < index - 1) {
			pointer = pointer.next;
			i++;
		}
		pointer.next = pointer.next.next;
		length--;
	}


	return {
		head,
		tail,
		append,
		prepend,
		printList,
        at,
        pop,
        contains,
		find,	
        size,
		toString,
		insertAt,
		removeAt
	};
})();

//Testing inserting methods
linkedList.append("foo");
linkedList.append("bar");

linkedList.prepend("prepended");

linkedList.append("baz");
linkedList.append("bak");

linkedList.insertAt("test", 2);
linkedList.insertAt("inserted", 5);

//Testing deletion methods
linkedList.removeAt(4);
linkedList.pop();

//Testing console logging methods
linkedList.size();
console.log(linkedList.toString() + "\n");

//Testing finding methods
console.log(`Contains foo? ${linkedList.contains("foo")}`);
console.log(`Index of foo? ${linkedList.find("foo")}`);
console.log(`What is at index 3? ${linkedList.at(3)}`);

