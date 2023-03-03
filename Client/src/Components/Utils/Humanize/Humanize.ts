const Humanize = {
    Word: (value: string) => {
      value = (value || '').replace(/([A-Z])/g, ' $1').trim();
      value = (value || '').replace('_', ' ').trim();
      value = (value || '').replace('  ', ' ').trim();
      return value;
    }
  };
  
  export default Humanize;
  