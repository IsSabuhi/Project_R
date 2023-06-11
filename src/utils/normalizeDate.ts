function getDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
  
    return `${day}.${month}.${year}`;
  }

export function normalizeDate(dateString: string): string {
    const date = new Date(dateString);
    
    return getDate(date);
  }

export function getYearFromDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  return `${year}`;
}