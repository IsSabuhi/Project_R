export const isUUID = (id: string) => {
  const regexp =
    /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
  const matches = id.match(regexp);

  return Boolean(matches);
};
