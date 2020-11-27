type Equal< Left, Right > = 
	(
		<X>()=> ( X extends Left ? 1 : 2 )
	) extends (
		<X>()=> ( X extends Right ? 1 : 2 )
	) ? unknown : never
