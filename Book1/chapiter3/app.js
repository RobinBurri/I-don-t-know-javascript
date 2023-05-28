function classroom(teacher) {
	return function study() {
		console.log(
			`${ teacher } says to study ${ this.topic }`
		);
	};
}
var assignment = classroom("Kyle");

assignment();
// Kyle says to study undefined  -- Oops :(

// Now consider:
var homework = {
	topic: "JS",
	assignment: assignment
};

homework.assignment();
// Kyle says to study JS

// Lastly:
var otherHomework = {
	topic: "Math"
};

assignment.call(otherHomework);
// Kyle says to study Math