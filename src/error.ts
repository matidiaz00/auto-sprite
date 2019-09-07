export function error(code:number, message:string, object?:any) {
    const err = {
        code: code,
        message: message,
        object: object
    };
    console.error(err)
};