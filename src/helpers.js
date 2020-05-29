const isUniqueName = (state, contactName) => {
  return !state.some((el) => el.name === contactName);
};

const sortContactsAlphabetically = (contacts) => {
  const sortedArr = [...contacts];

  return sortedArr.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
  });
};

const filterContactsByName = (contacts, filter) => {
  const filtred = contacts.filter((el) =>
    el.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return sortContactsAlphabetically(filtred);
};

const formatedNumber = (number) => {
  return number.replace(/(\d{1,3}(?=(?:\d\d)+(?!\d)))/g, "$1-");
};

export {
  isUniqueName,
  filterContactsByName,
  sortContactsAlphabetically,
  formatedNumber,
};
