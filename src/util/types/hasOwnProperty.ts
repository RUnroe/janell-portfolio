/***********
 * Not my code!
 * Found here at
 * https://dev.to/mapleleaf/indexing-objects-in-typescript-1cgi
 * Thanks to Will Douglas (https://dev.to/wdoug)
 ***********/

export default function hasOwnProperty<O extends object, K extends PropertyKey>(
    obj: O,
    key: K,
  ): obj is O & Record<K, unknown> {
    return Object.prototype.hasOwnProperty.call(obj, key);
}