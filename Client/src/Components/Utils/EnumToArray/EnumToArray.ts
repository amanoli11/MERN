import Humanize from "../Humanize/Humanize";

const EnumToArray = (myEnum: any) => {
  const array = Object.keys(myEnum)
    .filter((v) => isNaN(Number(v)))
    .map((name) => {
      return {
        value: `${myEnum[name as keyof typeof myEnum]}`,
        label: Humanize.Word(name)
      };
    });
  return array;
};

export { EnumToArray };
