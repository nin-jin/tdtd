type Deref< Obj > = {
    [ key in keyof Obj ]: Deref< Obj[ key ] > & {}
} & {}
