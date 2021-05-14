/**
 * Format a number to a money string
 * @param {number} value
 * @returns {string}
 */
 export function formatCurrency(value) {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formatter.format(value);
  }