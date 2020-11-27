type Classify< Left, Right > = Left extends Right

	? Right extends Left
		? [ Left , '==', Right ]
		: [ Left , '<:', Right ]
	
	: Right extends Left
		? [ Right, '<:', Left ]
		: [ Left , '!=', Right ]
