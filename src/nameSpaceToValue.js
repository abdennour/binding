
function binder(nameSpace, value, mountTo) {
     var result = {};
     var parts = nameSpace.split('.');
     if(parts.length == 1) {
         result[parts[0]] = value;
     } else if(parts.length > 1) {
         // concat all but the first part of the key
         var remainingParts = parts.slice(1,parts.length).join('.');
         result[parts[0]] = binder(remainingParts, value);
     }

      if (mountTo) {
        mountTo[parts[0]] = result[parts[0]]
      }

     return result;
}

export  default binder;
