const encode = (url: string) => {
  // encode base6ret
  let newUrl = Buffer.from(url).toString("base64");
  // encode rot 13
  newUrl = newUrl.replace(/[a-zA-Z]/g, function (c: any) {
    return String.fromCharCode(
      (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
    );
  });
  return newUrl.replace(/\=\=/g,'');
};

export default encode;
