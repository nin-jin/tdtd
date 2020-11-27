type Assert<
	Actual,
	Expected extends
	| Equal< Actual, Expected >
	| Mistake< 'Assert fail', {
		actual: Actual ,
		expected: Expected
	} >
> = Actual

type AssertNever< Actual extends never > = Actual
