/** Picks keys by values types with upper constraint */
type PickByValue< Obj, Upper > = Pick< Obj, {

	[ key in keyof Obj ]:
		Obj[ key ] extends Upper
			? unknown extends Obj[ key ]
				? never
				: key
			: never

}[ keyof Obj ] >

type filter_user_by_string = Assert<
	PickByValue< Stub.User, string >,
	{
		firstName: string
		lastName: string
	}
>

type all_user_classes = Assert<
	PickByValue< typeof Stub, typeof Stub.User >,
	{
		User: typeof Stub.User
		Admin: typeof Stub.Admin
		God: typeof Stub.God
	}
>
