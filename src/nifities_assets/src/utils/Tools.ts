export function to<T, U = Error>(
    promise: Promise<T>,
    errorExt?: object,
): Promise<[U | null, T | undefined]> {
    return promise
        .then<[null, T]>((data: T) => [null, data])
        .catch<[U, undefined]>((err: U) => {
            if (errorExt) {
                Object.assign(err, errorExt);
            }

            return [err, undefined];
        });
}

export function parseQuery(str: string) {
    const obj: any = {};
    str
        .replace(/^\?/, '')
        .split('&')
        .forEach((item) => {
            if (!item) return;
            const [key, value] = item.split('=');
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        });
    return obj;
}

export function stringifyQuery(obj: any) {
    let str = '';
    Object.keys(obj).forEach((key) => {
        str = `${str}&${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`;
    });
    if (str) {
        str = str.replace(/^&/, '?');
    }

    return str;
}