export const calculateAgeWithUnit = (date: string) => {
    const today = new Date();
    const birthDate = new Date(date);
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    let ageUnit = 'лет';
    if (age === 1) {
      ageUnit = 'год';
    } else if (age > 1 && age < 5) {
      ageUnit = 'года';
    }

    return `${age} ${ageUnit}`
}