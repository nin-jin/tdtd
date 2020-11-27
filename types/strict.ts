type Strict< Actual, Expected > =
	| Equal< Actual, Expected >
	| Mistake< 'Wrong keys',
		Actual extends Expected
			? Exclude< keyof Actual, keyof Expected >
			: Exclude< keyof Expected, keyof Actual >
	>

type same_types = Assert<
	Strict< Stub.Votes, { up: number, down: number} >,
	unknown
>

type excess_key = Assert<
	Strict< { up: number, down: number, left: number}, Stub.Votes >,
	Mistake< 'Wrong keys', 'left' >
>

type less_key = Assert<
	Strict< { up: number}, Stub.Votes >,
	Mistake< 'Wrong keys', 'down' >
>
