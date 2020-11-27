declare const MistakeSymbol : unique symbol

type Mistake<
	Message extends string,
	Info = never
> = Message & { [ MistakeSymbol ]: Info }
