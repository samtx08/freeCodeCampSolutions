const telephoneCheck = (str) => /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-])?(\d{3})([\s\-])?(\d{4})$/g.test(str);
