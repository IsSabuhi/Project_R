// export const calculateAgeWithUnit = (date: string | undefined | null) => {
//   if (!date) {
//     return 'Нет данных';
//   }

//   const today = new Date();
//   const birthDate = new Date(date);
    
//   let age = today.getFullYear() - birthDate.getFullYear();
//   const monthDiff = today.getMonth() - birthDate.getMonth();
    
//   if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//     age--;
//   }

//   let ageUnit = 'лет';
//   if (age === 1) {
//     ageUnit = 'год';
//   } else if (age > 1 && age < 5) {
//     ageUnit = 'года';
//   }

//   return `${age} ${ageUnit}`;
// };


export const calculateAgeWithUnit = (data: string | undefined | null) => {
  if (!data) {
    return 'Нет данных';
  }
  const birthDate = new Date(data);
  const now = new Date();
  const yearsDiff = now.getFullYear() - birthDate.getFullYear();

  if (now.getMonth() < birthDate.getMonth() ||
    (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate())) {
    // Пользователь еще не отпраздновал день рождения в этом году
    return (yearsDiff - 1) + " " + getYearsWord(yearsDiff - 1);
  } else {
    // Пользователь уже отпраздновал день рождения в этом году
    return yearsDiff + " " + getYearsWord(yearsDiff);
  }
}

function getYearsWord(years: number): string {
  const lastDigit = years % 10;
  const lastTwoDigits = years % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return "год";
  } else if (
    (lastDigit === 2 && lastTwoDigits !== 12) ||
    (lastDigit === 3 && lastTwoDigits !== 13) ||
    (lastDigit === 4 && lastTwoDigits !== 14)
  ) {
    return "года";
  } else {
    return "лет";
  }
}