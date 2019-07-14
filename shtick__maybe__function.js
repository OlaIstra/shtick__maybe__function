// wrapper-function maybe() - to protect internal function of fall down 
// and force to return underfined

function maybe(fn)
    return function _maybe(...args) {
        // Note that the == is deliberate.
        if ((args.length === 0) || args.some(a => (a == null)) {
            return undefined;
        }
        return fn.apply(this, args);
    }
}

// Apply a given function to every item in a NodeList and return an array.
function elListMap(transform, list) {
    // list might be a NodeList, which doesn't have .map(), so we convert
    // it to an array.
    return [...list].map(transform);
}

const safeElListMap = maybe(elListMap);
elListMap(x => x, null);
// ￩ undefined