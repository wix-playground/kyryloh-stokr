export const getBtnConfigs = callbacks => {
  const { searchCallback, refreshCallback, filterCallback, settingsCallback } = callbacks;
  return [
    {
      type: 'search',
      callback: searchCallback,
    },
    {
      type: 'refresh',
      callback: refreshCallback,
    },
    {
      type: 'filter',
      callback: filterCallback,
    },
    {
      type: 'settings',
      callback: settingsCallback,
    }
  ];
};
