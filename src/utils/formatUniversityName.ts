export const formatUniversityName = (universityName: string) => {
  const formattedName = universityName.replace(
    /Федеральное государственное бюджетное образовательное учреждение высшего образования «(.*)»/,
    "ФГБОУВО «$1»"
  );
  return formattedName;
  }

